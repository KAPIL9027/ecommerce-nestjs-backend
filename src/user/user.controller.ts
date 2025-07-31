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
import { RolesGuard } from './admin-user.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { MakeAdminDto } from './make-admin.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Throttle({ default: { ttl: 60000, limit: 1 } })
  @Post('/refresh')
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res) {
    const newAcessToken = await this.userService.refresh(req);
    res.cookie('access-token', newAcessToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      maxAge: 1 * 60 * 1000, // 1 minutes
    });
    return {
      message: 'Sucessfully created a new Access Token for you.',
    };
  }

  @Throttle({ default: { ttl: 60000, limit: 5 } })
  @Post('signin')
  @HttpCode(200)
  async validateUser(
    @Body() validateUserDto: ValidateUserDto,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const tokens = await this.userService.validateUser(validateUserDto);
      const csrfToken = (req as any).csrfToken();
      res.cookie('XSRF-TOKEN', csrfToken);
      res.cookie('access-token', tokens.accessToken, {
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        maxAge: 1 * 60 * 1000, // 1 minutes
      });
      res.cookie('refresh-token', tokens.refreshToken, {
        httpOnly: true,
        sameSite: 'lax',
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return {
        message: 'You are logged in!',
        csrfToken,
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
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tokens = await this.userService.createUser(dto);
    const csrfToken = (req as any).csrfToken();
    res.cookie('XSRF-TOKEN', csrfToken);
    res.cookie('refresh-token', tokens.refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.cookie('access-token', tokens.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
      maxAge: 1 * 60 * 1000, // 1 minutes
    });
    return {
      message: 'Succesfully create a new user',
      csrfToken,
    };
  }

  @Throttle({ default: { ttl: 60000, limit: 2 } })
  @Post('admin/make-admin')
  @UseGuards(JWTCookieGuard, RolesGuard)
  @Roles('ADMIN')
  async makeAdmin(@Body() makeAdminDto: MakeAdminDto) {
    return this.userService.makeAdmin(makeAdminDto);
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
