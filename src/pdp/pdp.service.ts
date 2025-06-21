import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './create-product.dto';
import { CreateProductOptionDto } from './create-product-option.dto';
import { Prisma } from '@prisma/client';
import { CreateProductOptionValueDto } from './create-product-option-value.dto';
import { CreateProductVariantOptionDto } from './create-product-variant-option.dto';
import { CreateProductVariantDto } from './create-product-variant.dto';

@Injectable()
export class PdpService {
  constructor(private prismaService: PrismaService) {}

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

  async createProduct(productData: CreateProductDto) {
    try {
      let productDataObj = {
        brand: productData.brand,
        title: productData.title,
        description: productData.description,
        price: productData.price,
        productImages: {
            connect: productData.productImageIds.map((id) => ({ id })),
          },
         variants: {
            connect: productData.variantIds.map((id) => ({ id })),
          },
          options: {
            connect: productData.optionIds.map((id) => ({ id })),
          },
      };
      if(productData.discountIds){
        productDataObj["discounts"] = {
            connect: productData.discountIds.map((id) => ({ id })),
          }
      }
      if(productData.reviewIds){
        productDataObj["reviews"] = {
            connect: productData.reviewIds.map((id) => ({ id })),
          }
      }
      const product = await this.prismaService.product.create({
        data: productDataObj
      });
      return {
        message: 'Successfully created the product',
        product: product,
      };
    } catch (e) {
      console.error(e);
      throw new InternalServerErrorException('500 Internal Server Error');
    }
  }

  async createProductOption(productOptionData: CreateProductOptionDto) {
    try {
      const productOption = await this.prismaService.productOption.create({
        data: {
          name: productOptionData.name,
          product: {
            connect: {
              id: productOptionData.productId,
            },
          },
          values: {
            connect: productOptionData.valuesIds.map((id) => ({ id: id })),
          },
        },
      });
      return {
        message: 'Succesfully Created the ProductOption',
        productOption,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException(
          'No ProductOptionValue or Product found with the provided id',
        );
      }
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
      return {
        message: 'Successfully Created the ProductOptionValue',
        productOptionValue,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        throw new NotFoundException('404, No Option with the given Id Found!');
      }
      throw new InternalServerErrorException('500 Internal Server Error!');
    }
  }

  async createProductVariantOption(productVariantOptionData: CreateProductVariantOptionDto){
    try{
      const productVariantOption = await this.prismaService.productVariantOption.create({
        data: {
          name: productVariantOptionData.name,
          value: productVariantOptionData.value,
          product: {
            connect:{
              id: productVariantOptionData.productVariantId
            }
          }
        }
      });
      return {
        message: "Successfully Created a ProductVariantOption",
        productVariantOption: productVariantOption
      }
    }
    catch(e){
      if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2025"){
        throw new NotFoundException("404, No Product with the given Id Found!")
      }
      throw new InternalServerErrorException("500 Internal Server Error!");
    }
  }

  async createProductVariant(productVariantData: CreateProductVariantDto){
    try{
      
      let productVariantObj = {
        product:{
          connect: {
            id: productVariantData.productId
          }
        },
        sku: productVariantData.sku,
        price: productVariantData.price,
        stock: productVariantData.stock
      };

      if(productVariantData.cartItemsIds){
        productVariantObj["cartItemsIds"] = 
      }
      if(productVariantData.cartItemsIds)
      const productVariant = await this.prismaService.productVariant.create({
        data: {
          cartItems:{
            connect: productVariantData.
          }
        }
      })
    }
    catch(e){
      if(e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2025'){
        throw new NotFoundException("404")
      }
      throw new InternalServerErrorException("500 Internal Server Exception!");
    }
  }
}
