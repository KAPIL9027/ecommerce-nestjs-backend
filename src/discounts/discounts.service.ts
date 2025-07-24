import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { OrderItem, Prisma } from '@prisma/client';
import { CartItem } from '../cart/cart-item.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateDiscountDto } from './create-discount.dto';
import { CreateDiscountCodeDto } from './create-discountcode.dto';
import { UpdateDiscountDto } from './update-discount.dto';
import { UpdateDiscountCodeDto } from './update-discount-code.dto';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class DiscountsService {
  constructor(
    private prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {}

  filterData(discountCodes, cartValue?: number) {
    return discountCodes.filter((discountCode) => {
      if (!discountCode.active) return false;
      if (discountCode.expiresAt && discountCode.expiresAt <= new Date())
        return false;
      if (
        discountCode.minCartValue &&
        cartValue &&
        cartValue < discountCode.minCartValue
      )
        return false;
      if (
        discountCode.maxUses &&
        discountCode.maxUses <= discountCode.usedCount
      )
        return false;

      return true;
    });
  }
  async getCartAndDiscountsTotal(
    userId: string,
    productVariantsItems: CartItem[] | OrderItem[],
  ) {
    let totalDiscount = 0.0;
    const productVariants = await Promise.all(
      productVariantsItems.map(
        async (productVariantItem: CartItem | OrderItem) => {
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
        },
      ),
    );
    let cartValue = productVariants.reduce((accumulator, productVariant) => {
      return accumulator + productVariant.price * productVariant.qty;
    }, 0);

    const discountCodesData = await this.prismaService.user.findUnique({
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
    });
    const discountCodes = discountCodesData?.discountCode ?? [];

    let validDiscountsCodes = this.filterData(discountCodes, cartValue);

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
    let variants = productVariants.map((productVariant) => {
      let productLevelDiscounts = productVariant.variant!.product.discounts;
      let productVariantLevelDiscounts = productVariant.variant!.discounts;
      if (productLevelDiscounts.length > 0) {
        let validVariantLevelDiscounts = productVariantLevelDiscounts.filter(
          (productVariantLevelDiscount) => {
            return productVariantLevelDiscount.combinable;
          },
        );
        productLevelDiscounts =
          validVariantLevelDiscounts.length > 0
            ? [...productLevelDiscounts, ...validVariantLevelDiscounts]
            : productLevelDiscounts;
      } else {
        productLevelDiscounts =
          productVariantLevelDiscounts.length > 0
            ? [...productVariantLevelDiscounts]
            : productLevelDiscounts;
      }

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
    return [cartValue, totalDiscount];
  }

  async getDiscount(discountId: string) {
    try {
      const discount = await this.prismaService.discount.findUnique({
        where: {
          id: discountId,
        },
        include: {
          products: true,
          variants: true,
          codes: true,
        },
      });
      this.logger.info({ discountId }, 'Created Discount Successfully!');
      return {
        discount: discount,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.message === 'P2025'
      ) {
        this.logger.warn(e, 'No Discount with this ID Found!');
        throw new NotFoundException('No Discount with this Id Found!');
      }
      this.logger.error(e, 'Get Discount Service Failed!');
      throw new InternalServerErrorException('Internal Server Error');
    }
  }

  async createDiscount(discountData: CreateDiscountDto) {
    try {
      let dataObj = {
        title: discountData.title,
        description: discountData.description,
        type: discountData.type,
        amount: discountData.amount,
        startDate: discountData.startDate,
        endDate: discountData.endDate,
        active: discountData.active,
        appliesTo: discountData.appliesTo,
        combinable: discountData.combinable,
      };
      if (discountData.productIds?.length) {
        dataObj['products'] = {
          connect: discountData.productIds.map((id) => ({ id })),
        };
      }
      if (discountData.categoryIds?.length) {
        dataObj['categories'] = {
          connect: discountData.categoryIds.map((id) => ({ id })),
        };
      }
      if (discountData.variantIds?.length) {
        dataObj['variants'] = {
          connect: discountData.variantIds.map((id) => ({ id })),
        };
      }
      if (discountData.codeIds?.length) {
        dataObj['codes'] = {
          connect: discountData.codeIds.map((id) => ({ id })),
        };
      }
      const createdDiscount = await this.prismaService.discount.create({
        data: dataObj,
      });
      this.logger.info(
        { discountId: createdDiscount.id },
        'Successfully Created Specified Discount!',
      );
      return {
        message: 'Successfully Created Specified Discount',
        discount: createdDiscount,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(
          e,
          'No Product/Variant/Category/Code Found with the given ID!',
        );
        throw e;
      }
      this.logger.error(
        e,
        'OOPS, Something Went Wrong!. Create Discount Service Failed!',
      );
      throw new InternalServerErrorException('500 Internal Server Error!');
    }
  }

  async createDiscountCode(discountCodeData: CreateDiscountCodeDto) {
    try {
      const dataObj = {
        code: discountCodeData.code,
        usedCount: discountCodeData.usedCount,
        userSpecific: discountCodeData.userSpecific,
        discountId: discountCodeData.discountId,
        active: discountCodeData.active,
      };
      if (discountCodeData.description) {
        dataObj['description'] = discountCodeData.description;
      }
      if (discountCodeData.expiresAt) {
        dataObj['expiresAt'] = discountCodeData.expiresAt;
      }
      if (discountCodeData.minCartValue) {
        dataObj['minCartValue'] = discountCodeData.minCartValue;
      }
      if (discountCodeData.maxUses) {
        dataObj['maxUses'] = discountCodeData.maxUses;
      }
      if (discountCodeData.userId) {
        dataObj['userId'] = discountCodeData.userId;
      }

      const createdDiscountCode = await this.prismaService.discountCode.create({
        data: dataObj,
      });
      this.logger.info(
        { discountCodeId: createdDiscountCode.id },
        'Successfully Created the DiscountCode',
      );
      return {
        message: 'Successfully Created the DiscountCode',
        discountCode: createdDiscountCode,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No Discount Found with the provided ID!');
        throw e;
      }
      this.logger.error(
        e,
        'OOPS, Someting Went Wrong. Create DiscountCode Service Failed!',
      );
      throw new InternalServerErrorException('500 Internal Server Error');
    }
  }

  async getDiscountCode(discountCodeId: string) {
    try {
      const getDiscountCode = await this.prismaService.discountCode.findUnique({
        where: {
          id: discountCodeId,
        },
        include: {
          discount: true,
        },
      });
      this.logger.info(
        { discountCodeId },
        'Successfully fetched DiscountCode with the given ID!',
      );
      return {
        message: 'Successfully fetched Discountcode with the given Id',
        discountCode: getDiscountCode,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'No DiscountCode with this ID Found!');
        throw new NotFoundException('404 Not Found');
      }
      throw new InternalServerErrorException('500 Internal Server Exception');
    }
  }

  async updateDiscount(
    discountId: string,
    updateDiscountData: UpdateDiscountDto,
  ) {
    try {
      const updatedDiscount = await this.prismaService.discount.update({
        where: {
          id: discountId,
        },
        data: updateDiscountData,
      });
      this.logger.info(
        { dicountId: discountId },
        'Successfully Updated the Discount!',
      );
      return {
        message: 'Successfully Updated the Discount!',
        updatedDiscount: updatedDiscount,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No Discount with the specified ID Found!');
        throw new NotFoundException('404 Not Found!');
      }
      throw new InternalServerErrorException('500 Internal Server Exception');
    }
  }

  async updateDiscountCode(
    updateDiscountCodeId: string,
    updateDiscountCodeData: UpdateDiscountCodeDto,
  ) {
    try {
      const updatedDiscountCode = await this.prismaService.discountCode.update({
        where: {
          id: updateDiscountCodeId,
        },
        data: updateDiscountCodeData,
      });
      this.logger.info(
        { discountCodeId: updateDiscountCodeId },
        'Successfully Updated the DiscountCode',
      );
      return {
        message: 'New Discount Code Created',
        updatedDiscountCode: updatedDiscountCode,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No DiscountCode with this ID Found');
        throw new NotFoundException('404 Not Found!');
      }
      this.logger.error(
        e,
        'OOPS, Something Went Wrong. Update DiscountCode Service Failed!',
      );
      throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
  }

  async deleteDiscountCode(discountCodeId: string) {
    try {
      const deletedDiscountCode = await this.prismaService.discountCode.delete({
        where: {
          id: discountCodeId,
        },
      });
      this.logger.info(
        { discountCodeId },
        'Successfully Deleted DiscountCode!',
      );
      return {
        message: 'Successfully Deleted DiscountCode',
        deletedDiscountCode: deletedDiscountCode,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No DiscountCode with this error!');
        throw new NotFoundException('404 Not Found!');
      }
      this.logger.error(e, 'OOPS, Something Went Wrong!');
      throw new InternalServerErrorException('500 Internal Server Error');
    }
  }
  async deleteDiscount(discountId: string) {
    try {
      const deletedDiscount = await this.prismaService.discount.delete({
        where: {
          id: discountId,
        },
      });
      this.logger.info({ discountId }, 'Successfully Deleted Discount!');
      return {
        message: 'Successfully Deleted Discount',
        deletedDiscount: deletedDiscount,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No Discount Found with this ID!');
        throw new NotFoundException('404 Not Found!');
      }
      this.logger.error(
        e,
        'OOPS, Something Went Wrong. Delete Discount Service Failed.',
      );
      throw new InternalServerErrorException('500 Internal Server Error');
    }
  }
}
