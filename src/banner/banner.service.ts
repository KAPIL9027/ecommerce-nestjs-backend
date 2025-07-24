import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateBannerDto } from './create-banner.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { PinoLogger } from 'nestjs-pino';
import { UpdateBannerDto } from './update-banner.dto';

@Injectable()
export class BannerService {
  constructor(
    private prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {
    logger.setContext(BannerService.name);
  }

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

      this.logger.info(
        { bannerId: banner.id },
        'Successfully Created the Banner!',
      );
      return {
        message: 'Successfully created the Banner',
        banner,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'Not Found Images with the provided ID');
        throw new NotFoundException('404, Not Found!');
      }
      this.logger.error(e, 'Create Banner Service Failed!');
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
      this.logger.info({ bannerId }, 'Successfully Updated the Banner');
      return {
        message: 'Successfully updated the banner',
        updatedBanner,
      };
    } catch (e) {
      if (e instanceof NotAcceptableException) {
        this.logger.warn(e, 'No Data Provided for updation');
        throw e;
      }
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No Banner Found with the given ID');
        throw new NotFoundException('404, No Banner Found with the given id');
      }
      this.logger.error(e, 'Update Banner Service Failed!');
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
      this.logger.info({ bannerId }, 'Successfully Deleted the Banner!');
      return {
        message: 'Successfully Deleted the Banner!',
        deletedBanner,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No Banner Found with this ID!');
        throw new NotFoundException('404, No Banner Found with this ID!');
      }
      this.logger.error(
        e,
        'OOPS, Something Went Wrong. Delete Banner Service Failed!',
      );
      throw new InternalServerErrorException('500, Internal Server Error!');
    }
  }
}
