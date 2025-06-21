import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { CreateDiscountDto } from './create-discount.dto';
import { Roles } from 'src/decorators/roles.decorator';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { RolesGuard } from 'src/user/admin-user.guard';
import { CreateDiscountCodeDto } from './create-discountcode.dto';
import { UpdateDiscountDto } from './update-discount.dto';
import { UpdateDiscountCodeDto } from './update-discount-code.dto';
@Controller('discounts')
export class DiscountsController {
    constructor(private readonly discountService: DiscountsService){
        
    }

   @Post()
   @UseGuards(JWTCookieGuard,RolesGuard)
   @Roles("ADMIN")
   async createDiscount(@Body() reqBody: CreateDiscountDto ){
    return this.discountService.createDiscount(reqBody);
   }

   @Post('/create-discountcode')
   @UseGuards(JWTCookieGuard,RolesGuard)
   @Roles("ADMIN")
   async createDiscountCode(@Body() reqBody: CreateDiscountCodeDto){
    return this.discountService.createDiscountCode(reqBody);
   }

   @Patch('/:discountId')
   @UseGuards(JWTCookieGuard,RolesGuard)
   @Roles("ADMIN")
   async updateDiscount(@Param('discountId') discountId: string,@Body() reqBody: UpdateDiscountDto){
    return this.discountService.updateDiscount(discountId,reqBody);
   }
   
   @Patch('/update-discountcode/:discountCodeId')
   @UseGuards(JWTCookieGuard,RolesGuard)
   @Roles("ADMIN")
   async updateDiscountCode(@Param('discountCodeId') discountCodeId: string, @Body() reqBody: UpdateDiscountCodeDto){
    return this.discountService.updateDiscountCode(discountCodeId,reqBody);
   }

   @Delete('/delete-discountcode/:discountCodeId')
   @UseGuards(JWTCookieGuard,RolesGuard)
   @Roles("ADMIN")
   async deleteDiscountCode(@Param('discountCodeId') discountCodeId: string){
    return this.discountService.deleteDiscountCode(discountCodeId);
   }

   @Delete('/:discountId')
   @UseGuards(JWTCookieGuard,RolesGuard)
   @Roles("ADMIN")
   async deleteDiscount(@Param('discountId') discountId: string){
    return this.discountService.deleteDiscount(discountId);
   }


   @Get('/:discountId')
   async getDiscount(@Param('discountId') discountId: string){
    return this.discountService.getDiscount(discountId);
   }
   @Get('/discount-code/:discountCodeId')
   async getDiscountCode(@Param('discountCodeId') discountCodeId: string){
    return this.discountService.getDiscountCode(discountCodeId);
   }
}
