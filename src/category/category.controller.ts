import { Body, Controller, Delete, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { RolesGuard } from 'src/user/admin-user.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { CreateCategoryDto } from './create-category.dto';
import { UpdateCategoryDto } from './update-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){

    }

    @Post('/create-category')
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async createCategory(@Body() categoryBody: CreateCategoryDto){
        return this.categoryService.createCategory(categoryBody);
    }

    
    @Patch('/update-category/:updateCategoryId')
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async updateCategory(@Param('updateCategoryId') updateCategoryId: string,@Body() updateCategoryBody: UpdateCategoryDto){
        return this.categoryService.updateCategory(updateCategoryId,updateCategoryBody);
    }

    // TODO - create a mock category and test this endpoint
    @Delete('/:categoryId')
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async deleteCategory(@Param('categoryId') deleteCategoryId: string){
        return this.categoryService.deleteCategory(deleteCategoryId);
    }
}
