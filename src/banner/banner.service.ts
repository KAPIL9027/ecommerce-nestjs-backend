import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBannerDto } from './create-banner.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { UpdateBannerDto } from './update-banner.dto';

@Injectable()
export class BannerService {
  constructor(private prismaService: PrismaService) {}

  async createBanner(createBannerBody: CreateBannerDto) {
    try {
      let bannerObj = {
        title: createBannerBody.title,
        description: createBannerBody.description,
        link: createBannerBody.link,
      };
      if ('imagesIds' in createBannerBody) {
        bannerObj['images'] = {
          connect: createBannerBody.imagesIds
            ? createBannerBody.imagesIds.map((imageId: string) => ({
                id: imageId,
              }))
            : [],
        };
      }
      const banner = await this.prismaService.banner.create({
        data: bannerObj,
      });
      return {
        message: 'Successfully created the Banner',
        banner,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException('404, Not Found!');
      }
      throw new InternalServerErrorException('OOPS, Something went wrong!');
    }
  }

  async updateBanner(bannerId: string, updateBannerBody: UpdateBannerDto) {
    try {
      let updateBannerObj = {};
      if (Object.keys(updateBannerBody).length === 0)
        throw new NotAcceptableException('No Data provided to Update');
      if ('title' in updateBannerBody && updateBannerBody.title) {
        updateBannerObj['title'] = updateBannerBody.title;
      }
      if ('description' in updateBannerBody && updateBannerBody.description) {
        updateBannerObj['description'] = updateBannerBody.description;
      }
      if ('link' in updateBannerBody && updateBannerBody.link) {
        updateBannerObj['link'] = updateBannerBody.link;
      }
      if ('imagesIds' in updateBannerBody) {
        updateBannerObj['images'] = {
          set: updateBannerBody.imagesIds
            ? updateBannerBody.imagesIds.map((imageId) => ({ id: imageId }))
            : [],
        };
      }

      const updatedBanner = await this.prismaService.banner.update({
        where: {
          id: bannerId,
        },
        data: updateBannerObj,
      });
      return {
        message: 'Successfully updated the banner',
        updatedBanner,
      };
    } catch (e) {
      if (e instanceof NotAcceptableException) {
        throw e;
      }
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException('404, No Banner Found with the given id');
      }
      throw new InternalServerErrorException('OOPS, Something went wrong!');
    }
  }

  async deleteBanner(bannerId: string) {
    try {
      const deletedBanner = await this.prismaService.banner.delete({
        where: {
          id: bannerId,
        },
      });
      return {
        message: 'Successfully Deleted the Banner!',
        deletedBanner
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException('404, No Banner Found with this ID!');
      }
      throw new InternalServerErrorException('500, Internal Server Error!');
    }
  }
}
