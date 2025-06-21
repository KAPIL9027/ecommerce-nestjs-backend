import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { Cart, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateCartDto } from './create-cart.dto';
import { Request } from 'express';
import { AddItemDto } from './add-item.dto';
import { UpdateItemDto } from './update-item.dto';

@Injectable()
export class CartService {
  constructor(private prismaService: PrismaService) {}

  async getCart(cartId: string) {
    if (!cartId) throw new NotAcceptableException('Invalid CartId');
    let cart: Cart | null = null;
    try {
      cart = await this.prismaService.cart.findUnique({
        where: {
          id: cartId,
        },
        include: {
          items: {
            include: {
              variant: true,
            },
          },
        },
      });
    } catch (e) {
      throw new InternalServerErrorException('Internal Server Error!');
    }
    if (!cart) throw new NotFoundException('No Cart Found!');
    return cart;
  }

  async createCart(cartData: CreateCartDto, req: Request) {
    try {
      await this.prismaService.cart.create({
        data: {
          user: { connect: { id: req.user!.userId } },
          items: {
            create: cartData.items,
          },
        },
      });

      return {
        message: 'Successfully created a cart!',
      };
    } catch (e) {
      throw e;
    }
  }

  async addItem(addItemDto: AddItemDto) {
    try {
      const existingItem = await this.prismaService.cartItem.findUnique({
        where: {
          cartId_variantId: {
            cartId: addItemDto.cartId,
            variantId: addItemDto.variantId,
          },
        },
      });
      if (existingItem) {
        await this.prismaService.cartItem.update({
          where: {
            id: existingItem.id,
          },
          data: {
            quantity: existingItem.quantity + addItemDto.quantity,
          },
        });
      } else {
        await this.prismaService.cartItem.create({
          data: {
            cart: {
              connect: {
                id: addItemDto.cartId,
              },
            },
            variant: {
              connect: {
                id: addItemDto.variantId,
              },
            },
            quantity: addItemDto.quantity,
          },
        });
      }
      return {
        message: 'Successfully Added this Item to the Cart',
      };
    } catch (e) {
      throw e;
    }
  }

  async updateItem(itemId: string, updateItemDto: UpdateItemDto) {
    try {
      await this.prismaService.cartItem.update({
        where: {
          id: itemId,
        },
        data: {
          quantity: updateItemDto.quantity,
        },
      });
      return {
        message: 'Item successfully updated!',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException('No CartItem with this ID Found');
      }
      console.log('Update Item Service Failed:', e);
      throw new InternalServerErrorException(
        'Oops, something went wrong. Could not update the requested Item.',
      );
    }
  }

  async deleteItem(itemId: string) {
    try {
      await this.prismaService.cartItem.delete({
        where: {
          id: itemId,
        },
      });
      return {
        message: 'Successfully Deleted!',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException('No CartItem with this ID Found!');
      }
      console.log('Delete CartItem Service failed', e);
      throw new InternalServerErrorException(
        'Oops Something Went Wrong! Could not Delete the provided CartItem',
      );
    }
  }

  async deleteCart(cartId: string) {
    try {
      await this.prismaService.cart.delete({
        where: {
          id: cartId,
        },
      });
      return {
        message: "Successfully Deleted the Cart!"
      }
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException('No Cart with this ID Found');
      }
      console.log('Delete Cart Service Failed', e);
      throw new InternalServerErrorException(
        'Oops something went Wrong! Internal Server Error',
      );
    }
  }
}
