import { Body, Controller, Get, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { PlpService } from './plp.service';
import { PlpDto } from './getPlp.dto';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { JwtService } from '@nestjs/jwt';
@Controller('plp')
export class PlpController {
    constructor(private readonly plpService: PlpService){
        
    }


    @Post('/:slug')
    @HttpCode(200)
    @UseGuards(JWTCookieGuard)
    async getPlpData(@Param('slug') category: string, @Body() reqBody: PlpDto){
        return this.plpService.getPlpData(category,reqBody);
    }
}
