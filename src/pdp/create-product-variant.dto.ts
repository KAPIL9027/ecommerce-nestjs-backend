import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsString,
  IsNumber,
  IsInt,
  IsOptional,
  IsArray,
} from 'class-validator';

export class CreateProductVariantDto {
  @ApiProperty({
    example: 'product-id',
    description: 'Product Id that produc-variant relates to.',
  })
  @IsUUID()
  productId: string;

  @ApiProperty({
    example: 'galaxy-s24-utlra',
    description: 'SKU of the Product Variant.',
  })
  @IsString()
  sku: string;

  @ApiProperty({
    example: 23000,
    description: 'Price of the Product Variant.',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 20,
    description: 'Stock of the Product Variant.',
  })
  @IsInt()
  stock: number;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['option-id-1', 'option-id-2'],
    description: 'OptionIds that the product variant relates to.',
    required: false,
  })
  optionsIds?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['image-id-1', 'image-id-2'],
    description: 'ImageIds that the product variant relates to.',
    required: false,
  })
  imagesIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  @ApiProperty({
    example: 'galaxy-s24-utlra',
    description: 'SKU of the Product Variant.',
    required: false,
  })
  discountIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  @ApiProperty({
    example: ['cart-item-id1', 'cart-item-id2'],
    description: 'CartItems Ids that it relates to.',
    required: false,
  })
  cartItemsIds?: string[];
}
