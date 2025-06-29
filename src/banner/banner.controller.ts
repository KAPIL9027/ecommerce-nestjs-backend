import { Body, Controller, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { BannerService } from './banner.service';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { RolesGuard } from 'src/user/admin-user.guard';
import { Roles } from 'src/decorators/roles.decorator';
import {CreateBannerDto} from './create-banner.dto'
import { UpdateBannerDto } from './update-banner.dto';

@Controller('banner')
export class BannerController {
    constructor(private readonly bannerService: BannerService){
        
    }

    @Post('create-banner')
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async createBanner(@Body() createBannerBody: CreateBannerDto){
        return this.bannerService.createBanner(createBannerBody);
    }

    @Patch('update-banner/:bannerId')
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async updateBanner(@Param('bannerId') bannerId: string, @Body() updateBannerBody: UpdateBannerDto){
        return this.bannerService.updateBanner(bannerId,updateBannerBody);
    }
 
    // to be tested
    @Patch('delete-banner/:bannerId')
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async deleteBanner(@Param('bannerId') bannerId: string){
        return this.bannerService.deleteBanner(bannerId)
    }
}
