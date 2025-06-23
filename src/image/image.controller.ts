import { Controller,Post,UseGuards,Body } from '@nestjs/common';
import {ImageService} from './image.service'
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { RolesGuard } from 'src/user/admin-user.guard';
import { Roles } from 'src/decorators/roles.decorator';
import {CreateImageDto} from './create-image.dto'
import { create } from 'domain';

@Controller('image')
export class ImageController {

    constructor(private readonly imageService: ImageService){

    }

    @Post('create-image')
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async createImage(@Body() createImageData: CreateImageDto){
        return this.imageService.createImage(createImageData)
    }
}
