import { Body, Controller, Get, Post, Query, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { Response } from 'express';
import { ValidateUserDto } from './validate-user.dto';
import { JWTCookieGuard } from './valid-user.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){

    }
    @Post('signin')
    async validateUser(@Body() validateUserDto: ValidateUserDto, @Res({passthrough: true}) res: Response){
            try {
                const token = await this.userService.validateUser(validateUserDto);
                console.log(token);
            res.cookie('token', token, {
                httpOnly: true,
                sameSite: 'lax',
                secure: true,
                maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
              });
            return {
                message: "You are logged in!"
            }
            }
            catch(e){
                console.error(e)
                return {
                    message: 'Oops Something Went Wrong! Internal Server Error!'
                }
            }
            
    }
    @Post('signup')
    async createUser(@Body() dto:CreateUserDto, @Res({passthrough: true}) res: Response){
        const token = await this.userService.createUser(dto);
        res.cookie('token', token, {
                httpOnly: true,
                sameSite: 'lax',
                secure: true,
                maxAge: 7 * 24 * 60 * 60 * 1000  // 7 days
              });
        return {
            message: "Succesfully create a new user"
        }
    }

    @Get('profile')
    @UseGuards(JWTCookieGuard)
    async getUserProfile(@Query('email') email: string){
        return this.userService.getUserProfile(email);
    }

    @Get('logout')
    @UseGuards(JWTCookieGuard)
    async logoutUser(@Res({passthrough: true}) res: Response){
        res.clearCookie('token',{
            httpOnly: true,
            secure: true,
            sameSite: 'lax'
        });

        return {
            message: "You are successfully logged out!"
        }
        
    }

}
