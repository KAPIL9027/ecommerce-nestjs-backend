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

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}
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
      return {
        message: 'Successfully Created a Category',
        category,
      };
    } catch (e) {
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
          set: updateCategoryData.parentId ? {
            id: updateCategoryData.parentId,
          } : [],
        };
      }
      if ('subCategoriesIds' in updateCategoryData) {
        categoryObj['subcategories'] = {
          set: updateCategoryData.subCategoriesIds ? updateCategoryData.subCategoriesIds.map((subCategoryId) => ({
            id: subCategoryId,
          })) : []
        };
      }
      if ('imagesIds' in updateCategoryData) {
        categoryObj['images'] = {
          set: updateCategoryData.imagesIds ? updateCategoryData.imagesIds.map((imageId) => ({
            id: imageId,
          })) : [],
        };
      }
      if ('discountsIds' in updateCategoryData) {
        categoryObj['discounts'] = {
          connect: updateCategoryData.discountsIds ? updateCategoryData.discountsIds.map((discountId) => ({
            id: discountId,
          })) : []
        };
      }

      const category = await this.prismaService.category.update({
        where: {
          id: categoryId,
        },
        data: categoryObj,
      });
      return {
        message: 'Successfully Updated a Category',
        category,
      };
    } catch (e) {
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
      return {
        message: 'Successfully Deleted the Category',
        deletedCategory,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException('404, No Category with this id Found!');
      }
      throw new InternalServerErrorException('500, Internal Server Error!');
    }
  }
}
