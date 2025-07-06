import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import {
  Cart,
  Discount,
  DiscountCode,
  Prisma,
  ProductVariant,
} from '@prisma/client';
import { CartItem } from './cart-item.dto';
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

  filterData(discountCodes: DiscountCode[], cartValue?: number) {
    return discountCodes.filter((discountCode) => {
      
          if(!discountCode.active) return false;
          if(discountCode.expiresAt && discountCode.expiresAt <= new Date()) return false;
          if(discountCode.minCartValue && cartValue && cartValue < discountCode.minCartValue)
          return false;
          if(discountCode.maxUses && discountCode.maxUses <= discountCode.usedCount)
          return false;
     
          return true;
      });
  }

  async getDiscountsTotal(userId: string, productVariantsItems: CartItem[]) {
    let totalDiscount = 0.0;
    const productVariants = await Promise.all(
      productVariantsItems.map(async (productVariantItem: CartItem) => {
        const variant = await this.prismaService.productVariant.findFirst({
          where: { id: productVariantItem.variantId },
          include: {
            discounts: true,
            product: {
              include: {
                discounts: true,
                category: {
                  include: {
                    discounts: true,
                  },
                },
              },
            },
          },
        });

        if (!variant || !variant.price) {
          throw new Error(
            `Variant not found or price missing for ID: ${productVariantItem.variantId}`,
          );
        }

        return {
          qty: productVariantItem.quantity,
          price: variant?.price,
          variant,
        };
      }),
    );
    let cartValue = productVariants.reduce((accumulator, productVariant) => {
      return accumulator + productVariant.price * productVariant.qty;
    }, 0);

    const discountCodesData = (
      await this.prismaService.user.findUnique({
        where: {
          id: userId,
        },
        include: {
          discountCode: {
            include: {
              discount: true,
            },
          },
        },
      })
    );
    const discountCodes = discountCodesData?.discountCode ?? []
   
      let validDiscountsCodes = this.filterData(discountCodes,cartValue);

      totalDiscount += validDiscountsCodes.reduce((accumulator, discountCode) => {
        let amount = 0;
        let discount = discountCode.discount;
        if (discount.active) {
          if (discount.type === 'PERCENTAGE') {
            amount += cartValue * (discount.amount / 100);
          } else {
            amount += discount.amount;
          }
        }
        return accumulator + amount;
      }, 0);
    }

    let variants = productVariants.map((productVariant) => {
      let productLevelDiscounts = productVariant.variant!.product.discounts;
      let categoryLevelDiscounts =
        productVariant.variant!.product.category.discounts;
      let discounts = [...productLevelDiscounts, ...categoryLevelDiscounts];
      return {
        discountValue: discounts.reduce((accumulator, discount) => {
          let amount = 0;
          if (discount.active) {
            if (discount.type === 'PERCENTAGE') {
              amount +=
                productVariant.price! *
                productVariant.qty *
                (discount.amount / 100);
            } else {
              amount += discount.amount;
            }
          }
          return accumulator + amount;
        }, 0),
      };
    });

    totalDiscount += variants.reduce((accumulator, variant) => {
      return accumulator + variant.discountValue;
    }, 0);
    return totalDiscount;
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
        message: 'Successfully Deleted the Cart!',
      };
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

type FullVariant = {
  qty: number;
  variant: {
    id: string;
    discounts: Discount[];
    product: {
      discounts: Discount[];
      category: {
        discounts: Discount[];
      };
    };
  };
};
