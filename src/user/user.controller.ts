import {
  Body,
  Controller,
  Get,
  HttpCode,
  InternalServerErrorException,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { Request, Response } from 'express';
import { ValidateUserDto } from './validate-user.dto';
import { JWTCookieGuard } from './valid-user.guard';
import { Throttle } from '@nestjs/throttler';
import { generateToken } from 'src/main';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Throttle({ default: { ttl: 60000, limit: 5 } })
  @Post('signin')
  @HttpCode(200)
  async validateUser(
    @Body() validateUserDto: ValidateUserDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const token = await this.userService.validateUser(validateUserDto);
      const csrfToken = generateToken(req, res);
      res
        .cookie('token', token, {
          httpOnly: true,
          sameSite: 'lax',
          secure: true,
          maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        })
        .json({
          'csrf-token': csrfToken,
        });

      return {
        message: 'You are logged in!',
      };
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException('500, Internal Server Error!');
    }
  }

  @Throttle({ default: { ttl: 60000, limit: 5 } })
  @Post('signup')
  async createUser(
    @Body() dto: CreateUserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = await this.userService.createUser(dto);
    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return {
      message: 'Succesfully create a new user',
    };
  }

  @Throttle({ default: { ttl: 60000, limit: 30 } })
  @Get('profile')
  @UseGuards(JWTCookieGuard)
  async getUserProfile(@Query('email') email: string) {
    return this.userService.getUserProfile(email);
  }

  @Get('logout')
  @UseGuards(JWTCookieGuard)
  async logoutUser(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    });

    return {
      message: 'You are successfully logged out!',
    };
  }
}
