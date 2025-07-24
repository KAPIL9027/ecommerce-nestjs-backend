import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { Cart, Prisma } from '@prisma/client';
import { CartItem } from './cart-item.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateCartDto } from './create-cart.dto';
import { Request } from 'express';
import { AddItemDto } from './add-item.dto';
import { UpdateItemDto } from './update-item.dto';
import { DiscountsService } from 'src/discounts/discounts.service';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class CartService {
  constructor(
    private prismaService: PrismaService,
    private discountService: DiscountsService,
    private readonly logger: PinoLogger,
  ) {}

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
      this.logger.info({ cartId }, 'Successfully fetched the Cart!');
      return {
        message: 'Successfully fetched the Cart!',
        cart,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No Cart Found with this Id!');
        throw e;
      }
      this.logger.error(
        e,
        'OOPS, Something Went Wrong. Get Cart Service Failed!',
      );
      throw new InternalServerErrorException('Internal Server Error!');
    }
  }
  async getTaxes(productVariantItems: CartItem[]) {
    const productVariants = await Promise.all(
      productVariantItems.map(async (productVariantItem) => {
        const productVariant =
          await this.prismaService.productVariant.findUnique({
            where: { id: productVariantItem.variantId },
            include: {
              product: true,
            },
          });
        return {
          qty: productVariantItem.quantity,
          productTax:
            productVariant?.price! * productVariant?.product?.gstRate!,
        };
      }),
    );

    return productVariants.reduce((accumulator, productVariantItem) => {
      return (
        accumulator + productVariantItem.qty * productVariantItem.productTax
      );
    }, 0);
  }
  async createCart(cartData: CreateCartDto, req: Request) {
    try {
      const shippingAddress =
        await this.prismaService.shippingAddress.findFirst({
          where: {
            userId: req.user!.userId,
            isDefault: true,
          },
        });
      if (!cartData.items || cartData.items.length === 0) {
        throw new BadRequestException('Cart items are required');
      }
      if (!shippingAddress)
        throw new NotFoundException(
          'No Default Shipping Address Found for the User',
        );
      const [cartValue, totalDiscount] =
        await this.discountService.getCartAndDiscountsTotal(
          req.user!.userId,
          cartData.items,
        );
      const totalTaxes = await this.getTaxes(cartData.items);
      let totalCgst: number = 0.0;
      let totalSgst: number = 0.0;
      let totalIgst: number = 0.0;
      if (shippingAddress.state === process.env.BUSINESS_STATE) {
        totalCgst = totalTaxes / 2;
        totalSgst = totalTaxes / 2;
      } else {
        totalIgst = totalTaxes;
      }
      const cart = await this.prismaService.cart.create({
        data: {
          user: { connect: { id: req.user!.userId } },
          items: {
            create: cartData.items,
          },
          shippingAddress: {
            connect: {
              id: shippingAddress.id,
            },
          },
          totalDiscounts: totalDiscount,
          totalTaxes,
          totalCgst,
          totalIgst,
          totalSgst,
          subTotal: cartValue + totalTaxes - totalDiscount,
        },
      });
      this.logger.info({ cartId: cart.id }, 'Successfully Created the Cart!');
      return {
        message: 'Successfully created a cart!',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(
          e,
          'No User/ShippingAddress Found with the provided ID!',
        );
        throw e;
      }
      if (e.message === 'No Default Shipping Address Found for the User') {
        this.logger.error(e, 'No Default Shipping Address Found for the User');
      }
      this.logger.error(
        e,
        'OOPS, Something Went Wrong. Create Cart Service Failed',
      );
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
      this.logger.info(
        { cartId: addItemDto.cartId },
        'Successfully Added this Item to the Cart!',
      );
      return {
        message: 'Successfully Added this Item to the Cart',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No CartItem/Variant Found with the provided ID!');
        throw e;
      }
      this.logger.error(
        e,
        'OOPS Something Went Wrong. Add Cart Item Service Failed!',
      );
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
      this.logger.info({cartItemId: itemId},'CartItem Successfullly Updated!');
      return {
        message: 'Item successfully updated!',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No CartItem Found with this ID');
        throw new NotFoundException('No CartItem Found with this ID');
      }
      this.logger.error(
        e,
        'OOPS, Something Went Wrong. Update CartItem Service Failed!',
      );
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
      this.logger.info({cartItemId: itemId},'Successfully Deleted the Cart!');
      return {
        message: 'Successfully Deleted!',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'No CartItem with this ID Found!');
        throw new NotFoundException('No CartItem with this ID Found!');
      }
      this.logger.error(
        e,
        'OOPS, Something Went Wrong. Delete CartItem Service Failed!',
      );
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
      this.logger.info({cartId},'Successfully Deleted the Cart!');
      return {
        message: 'Successfully Deleted the Cart!',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No Cart with this ID Found!');
        throw new NotFoundException('No Cart with this ID Found');
      }
      this.logger.error(
        e,
        'OOPS, Something Went Wrong. Delete Cart Service Failed!',
      );
      throw new InternalServerErrorException(
        'Oops something went Wrong! Internal Server Error',
      );
    }
  }
}
