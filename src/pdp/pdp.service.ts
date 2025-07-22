import {
  Injectable,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './create-product.dto';
import { CreateProductOptionDto } from './create-product-option.dto';
import { Prisma } from '@prisma/client';
import { CreateProductOptionValueDto } from './create-product-option-value.dto';
import { CreateProductVariantOptionDto } from './create-product-variant-option.dto';
import { CreateProductVariantDto } from './create-product-variant.dto';
import { HSN_GST_RATES } from 'src/utils/hsn-get-rates';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class PdpService {
  constructor(
    private prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {
    logger.setContext(PdpService.name);
  }

  async getPdp(productId: string) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        options: {
          include: {
            values: true,
          },
        },
        variants: {
          include: {
            options: true,
            images: true,
          },
        },
        reviews: {
          orderBy: {
            createdAt: 'desc',
          },
        },
        productImages: true,
      },
    });
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  getGstRate(hsnCode: string): number {
    if (HSN_GST_RATES[hsnCode]) return HSN_GST_RATES[hsnCode].gstRate;
    return 0.0;
  }

  // TO BE TESTED
  async createProduct(productData: CreateProductDto) {
    try {
      let gstRate = this.getGstRate(productData.hsnCode);
      if (gstRate === 0.0) {
        throw new NotAcceptableException('Invalid Hsncode Provided!');
      }
      let productDataObj = {
        brand: productData.brand,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        hsnCode: productData.hsnCode,
        gstRate,
        productInformation: productData.productInformation,
        categoryId: productData.categoryId,
      };
      if (productData.productImageIds) {
        productDataObj['productImages'] = {
          connect: productData.productImageIds.map((id) => ({ id })),
        };
      }
      if (productData.variantIds) {
        productDataObj['variants'] = {
          connect: productData.variantIds.map((id) => ({ id })),
        };
      }
      if (productData.optionIds) {
        productDataObj['options'] = {
          connect: productData.optionIds.map((id) => ({ id })),
        };
      }
      if (productData.discountIds) {
        productDataObj['discounts'] = {
          connect: productData.discountIds.map((id) => ({ id })),
        };
      }
      if (productData.reviewIds) {
        productDataObj['reviews'] = {
          connect: productData.reviewIds.map((id) => ({ id })),
        };
      }
      if (productData.isNew) {
        productDataObj['isNew'] = productData.isNew;
      }
      if (productData.isTrending) {
        productDataObj['isTrending'] = productData.isTrending;
      }
      const product = await this.prismaService.product.create({
        data: productDataObj,
      });
      this.logger.info('Successfully created the product');
      return {
        message: 'Successfully created the product',
        product: product,
      };
    } catch (e) {
      this.logger.error(e, 'Create Product Service Failed!');
      throw new InternalServerErrorException('500 Internal Server Error');
    }
  }

  async createProductOption(productOptionData: CreateProductOptionDto) {
    try {
      let productOptionObj = {
        name: productOptionData.name,
        product: {
          connect: {
            id: productOptionData.productId,
          },
        },
      };
      if (productOptionData.valuesIds) {
        productOptionObj['values'] = {
          connect: productOptionData.valuesIds.map((id) => ({ id })),
        };
      }
      const productOption = await this.prismaService.productOption.create({
        data: productOptionObj,
      });
      this.logger.info('Successfully Created the ProductOption');
      return {
        message: 'Successfully Created the ProductOption',
        productOption,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'No Product found with this ID!');
        throw new NotFoundException(
          'No ProductOptionValue or Product found with the provided id',
        );
      }
      this.logger.error(e, 'Create Product Option Service Failed!');
      throw new InternalServerErrorException('500 Internal Server Error!');
    }
  }

  async createProductOptionValue(
    productOptionValueData: CreateProductOptionValueDto,
  ) {
    try {
      const productOptionValue =
        await this.prismaService.productOptionValue.create({
          data: {
            value: productOptionValueData.value,
            option: {
              connect: {
                id: productOptionValueData.optionId,
              },
            },
          },
        });
      this.logger.info('Successfully Created the ProductOptionValue');
      return {
        message: 'Successfully Created the ProductOptionValue',
        productOptionValue,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'No Option Found with this ID!');
        throw new NotFoundException('404, No Option with the given Id Found!');
      }
      throw new InternalServerErrorException('500 Internal Server Error!');
    }
  }

  async createProductVariantOption(
    productVariantOptionData: CreateProductVariantOptionDto,
  ) {
    try {
      const productVariantOption =
        await this.prismaService.productVariantOption.create({
          data: {
            name: productVariantOptionData.name,
            value: productVariantOptionData.value,
            product: {
              connect: {
                id: productVariantOptionData.productVariantId,
              },
            },
          },
        });
      this.logger.info('Successfully Created a ProductVariantOption');
      return {
        message: 'Successfully Created a ProductVariantOption',
        productVariantOption: productVariantOption,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'No Product with the given ID Found!');
        throw new NotFoundException('404, No Product with the given Id Found!');
      }
      this.logger.error(e, 'Create Product Variant Option Failed');
      throw new InternalServerErrorException('500 Internal Server Error!');
    }
  }

  async createProductVariant(productVariantData: CreateProductVariantDto) {
    try {
      let productVariantObj = {
        product: {
          connect: {
            id: productVariantData.productId,
          },
        },
        sku: productVariantData.sku,
        price: productVariantData.price,
        stock: productVariantData.stock,
      };

      if (productVariantData.optionsIds) {
        productVariantObj['options'] = {
          connect: productVariantData.optionsIds.map((id) => ({ id })),
        };
      }
      if (productVariantData.cartItemsIds) {
        productVariantObj['cartItems'] = {
          connect: productVariantData.cartItemsIds.map((id) => ({ id })),
        };
      }
      if (productVariantData.discountIds) {
        productVariantObj['discounts'] = {
          connect: productVariantData.discountIds.map((id) => ({ id })),
        };
      }
      if (productVariantData.imagesIds) {
        productVariantObj['images'] = productVariantData.imagesIds.map(
          (id) => ({ id }),
        );
      }
      const productVariant = await this.prismaService.productVariant.create({
        data: productVariantObj,
      });
      this.logger.info('Successfully Created the ProductVariant');
      return {
        message: 'Successfully Created the ProductVariant',
        productVariant: productVariant,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(
          e,
          'No Product/CartItems/ProductVariantImages/Discounts/ProductVariantOption Found with this ID!',
        );
        throw new NotFoundException(
          'No Product/CartItems/ProductVariantImages/Discounts/ProductVariantOption Found with this ID!',
        );
      }
      this.logger.error(e, 'Create Product Variant Service Failed!');
      throw new InternalServerErrorException('500 Internal Server Exception!');
    }
  }
}
