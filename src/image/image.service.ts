import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateImageDto } from './create-image.dto';
import { Category, Image, Prisma, Product } from '@prisma/client';
import { UpdateImageDto } from './update-image.dto';
import { Banner, ProductVariant } from 'generated/prisma';
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
        if(updateImageData.relationType){
          switch(updateImageData.relationType){
            case 'PRODUCT':
              updateImageObj["product"] = {connect: {id: updateImageData.relationId}}
              break;
            case 'PRODUCT_VARIANT':
              updateImageObj["productVariant"] = {connect: {id: updateImageData.relationId}}
              break;
            case 'BANNER':
              updateImageObj["banner"] = {connect: {id: updateImageData.relationId}}
              break;
            case 'CATEGORY':
              updateImageObj["category"] = {connect: {id: updateImageData.relationId}}
              break;
            default:
              throw new NotAcceptableException('Invalid relation-type');
          }
        }

        const updatedImageData = await this.prismaService.image.update({
          where: {
            id: imageId
          },
          data: updateImageObj
        });
        return {
          message: "Successfully updated the image with the given id",
          updatedImage: updatedImageData
        }
       
    }
    catch(e){
        if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
            throw new NotFoundException('404, No Image Found with the provided ID.')
        }
        console.error('Image Update Service failed',e);
        throw new InternalServerErrorException("500, Internal Server Error Exception");
    }
  }

  async deleteImage(imageId: string){
    try{
      const deltedImage = await this.prismaService.image.delete({
        where: {
          id: imageId
        }
      });
      return {
        message: "Successfully Deleted the Image",
        deletedImage: deltedImage
      }
    }
    catch(e){
      if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
        throw new  NotFoundException('404, No Image found with the given id')
      }
      throw new InternalServerErrorException('500, Internal Server Error!');
    }
  }
}
