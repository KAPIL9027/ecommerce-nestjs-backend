import { Body, Controller, Delete, Get, InternalServerErrorException, NotAcceptableException, NotFoundException, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { Cart } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CartService } from './cart.service';
import { CreateCartDto } from './create-cart.dto';
import { PassThrough } from 'stream';
import { Request } from 'express';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { AddItemDto } from './add-item.dto';
import { UpdateItemDto } from './update-item.dto';

@Controller('cart')
@UseGuards(JWTCookieGuard)
export class CartController {

    constructor(private readonly cartService: CartService){

    }


    @Get('/:id')
    async getCart(@Param('id') cartId: string){
        return this.cartService.getCart(cartId);
    }

    @Post('/create')
    async createCart(@Body() createCartDto: CreateCartDto, @Req() req: Request){
        return this.cartService.createCart(createCartDto,req);
    }

    @Post('cart-item/add-item')
    async addItem(@Body() addItemDto: AddItemDto){
        return this.cartService.addItem(addItemDto);
    }

    @Patch('cart-item/:itemId')
    async updateItem(@Param('itemId') itemId: string, @Body() updateItemDto: UpdateItemDto){
        return this.cartService.updateItem(itemId,updateItemDto);
    }

    @Delete('cart-item/:itemId')
    async deleteItem(@Param('itemId') itemId: string){
        return this.cartService.deleteItem(itemId);
    }

    @Delete('/:cartId')
    async deleteCart(@Param('cartId') cartId: string){
        return this.cartService.deleteCart(cartId);
    }

}
