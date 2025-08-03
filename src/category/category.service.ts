import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './create-category.dto';
import { PrismaService } from 'src/prisma.service';
import { UpdateCategoryDto } from './update-category.dto';
import { Prisma } from '@prisma/client';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class CategoryService {
  constructor(
    private prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {}
  async getAllCategories() {
    try {
      const categories = await this.prismaService.category.findMany({
        include: {
          subcategories: {
            include: {
              subcategories: true,
            },
          },
        },
      });
      this.logger.info({ categories }, 'Fetched all the categories');
      return {
        message: 'Fetched all the categories',
        categories,
      };
    } catch (e) {
      this.logger.error(e, 'OOPS, Something Went Wrong!');
      throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
  }
  async createCategory(categoryData: CreateCategoryDto) {
    try {
      let categoryObj = {
        title: categoryData.title,
        slug: categoryData.slug,
      };
      if (categoryData.parentId) {
        categoryObj['parent'] = {
          connect: {
            id: categoryData.parentId,
          },
        };
      }
      if (categoryData.subCategoriesIds) {
        categoryObj['subcategories'] = {
          connect: categoryData.subCategoriesIds.map((subCategoryId) => ({
            id: subCategoryId,
          })),
        };
      }
      if (categoryData.imagesIds) {
        categoryObj['images'] = {
          connect: categoryData.imagesIds.map((imageId) => ({ id: imageId })),
        };
      }
      if (categoryData.discountsIds) {
        categoryObj['discounts'] = {
          connect: categoryData.discountsIds.map((discountId) => ({
            id: discountId,
          })),
        };
      }
      const category = await this.prismaService.category.create({
        data: categoryObj,
      });

      this.logger.info(
        { categoryId: category.id },
        'Successfully Created a Category',
      );
      return {
        message: 'Successfully Created a Category',
        category,
      };
    } catch (e) {
      this.logger.warn(
        e,
        'OOPS, Something Went Wrong. Create Category Service Failed!',
      );
      throw new InternalServerErrorException('500, Internal Server Error!');
    }
  }

  async updateCategory(
    categoryId: string,
    updateCategoryData: UpdateCategoryDto,
  ) {
    try {
      let categoryObj = {};
      if (!updateCategoryData) {
        throw new NotAcceptableException('No data provided to update.');
      }
      if ('title' in updateCategoryData && updateCategoryData.title) {
        categoryObj['title'] = updateCategoryData.title;
      }
      if ('slug' in updateCategoryData && updateCategoryData.slug) {
        categoryObj['slug'] = updateCategoryData.slug;
      }
      if ('parentId' in updateCategoryData) {
        categoryObj['parent'] = {
          set: updateCategoryData.parentId
            ? {
                id: updateCategoryData.parentId,
              }
            : [],
        };
      }
      if ('subCategoriesIds' in updateCategoryData) {
        categoryObj['subcategories'] = {
          set: updateCategoryData.subCategoriesIds
            ? updateCategoryData.subCategoriesIds.map((subCategoryId) => ({
                id: subCategoryId,
              }))
            : [],
        };
      }
      if ('imagesIds' in updateCategoryData) {
        categoryObj['images'] = {
          set: updateCategoryData.imagesIds
            ? updateCategoryData.imagesIds.map((imageId) => ({
                id: imageId,
              }))
            : [],
        };
      }
      if ('discountsIds' in updateCategoryData) {
        categoryObj['discounts'] = {
          connect: updateCategoryData.discountsIds
            ? updateCategoryData.discountsIds.map((discountId) => ({
                id: discountId,
              }))
            : [],
        };
      }

      const category = await this.prismaService.category.update({
        where: {
          id: categoryId,
        },
        data: categoryObj,
      });
      this.logger.info(
        { categoryId: category.id },
        'Successfully Updated a Category',
      );
      return {
        message: 'Successfully Updated a Category',
        category,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No Category Found with this ID!');
        throw e;
      }
      this.logger.error(e, 'Update Category Service Failed!');
      throw e;
    }
  }

  async deleteCategory(categoryId: string) {
    try {
      const deletedCategory = await this.prismaService.category.delete({
        where: {
          id: categoryId,
        },
      });
      this.logger.info({ categoryId }, 'Successfully Deleted the Category!');
      return {
        message: 'Successfully Deleted the Category',
        deletedCategory,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No Category with this id Found!');
        throw new NotFoundException('404, No Category with this id Found!');
      }
      this.logger.error(
        e,
        'OOPS, Something went wrong. Delete Category Service Failed!',
      );
      throw new InternalServerErrorException('500, Internal Server Error!');
    }
  }
}
