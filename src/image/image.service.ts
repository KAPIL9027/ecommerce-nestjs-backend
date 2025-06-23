import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateImageDto } from './create-image.dto';
import { Image, Prisma } from '@prisma/client';
import { UpdateImageDto } from './update-image.dto';
@Injectable()
export class ImageService {
  constructor(private readonly prismaService: PrismaService) {}

  async createImage(createImageData: CreateImageDto) {
    try {
      let imageDataObj = {
        url: createImageData.url,
      };
      if(createImageData.altText)
        imageDataObj["altText"] = createImageData.altText
      switch (createImageData.relationType) {
        case 'BANNER':
          imageDataObj['banner'] = {
            connect: { id: createImageData.relationId },
          };
          break;
        case 'PRODUCT':
          imageDataObj['product'] = {
            connect: { id: createImageData.relationId },
          };
          break;
        case 'PRODUCT_VARIANT':
          imageDataObj['productVariant'] = {
            connect: { id: createImageData.relationId },
          };
          break;
        case 'CATEGORY':
          imageDataObj['category'] = {
            connect: { id: createImageData.relationId },
          };
          break;
        default:
          throw new BadRequestException('Invalid relation type');
      }

      const image: Image = await this.prismaService.image.create({
        data: imageDataObj,
      });
      return {
        message: 'Image successfully created!',
        image,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException(
          'No Product/Banner/ProductVariant/Category Found with the given ID.',
        );
      }
      throw new InternalServerErrorException('500, Internal Server Error!');
    }
  }

  async updateImage(imageId: string,updateImageData: UpdateImageDto){
    try{
        let updateImageObj = {

        }
        if(updateImageData.url){
            updateImageObj["url"] = updateImageData.url
        }
        if(updateImageData.altText){
            updateImageObj["altText"] = updateImageData.altText
        }
        // if(updateImageData.relationType){
        //     switch(updateImageData.relationType){
        //         case 'PRODUCT':
                    
        // }
        // }
        
        const updatedImage = await this.prismaService.image.update({
            where:{
                id: imageId
            },
            data: 
        })
    }
    catch(e){
        if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
            throw new NotFoundException('404, No Image Found with the provided ID.')
        }
        throw new InternalServerErrorException("500, Internal Server Error Exception");
    }
  }
}
