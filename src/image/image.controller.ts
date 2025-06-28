import { Controller,Post,UseGuards,Body, Param, Patch, Delete } from '@nestjs/common';
import {ImageService} from './image.service'
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { RolesGuard } from 'src/user/admin-user.guard';
import { Roles } from 'src/decorators/roles.decorator';
import {CreateImageDto} from './create-image.dto'
import { UpdateImageDto } from './update-image.dto';

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

    @Patch('/:updateImageId')
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async updateImage(@Param('updateImageId') imageId: string, @Body() updateImageData: UpdateImageDto ){
        return this.imageService.updateImage(imageId,updateImageData);
    }

    // todo: test this endpoint

    @Delete('/:imageId')
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async deleteImage(@Param('deleteImageId') imageId){
        return this.imageService.deleteImage(imageId);
    }
}
