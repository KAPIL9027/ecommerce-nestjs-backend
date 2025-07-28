import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Samsung',
    description: 'Brand name of the product.',
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({
    example: 'Samsung Galaxy S24 Ultra',
    description: 'Title of the product.',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Description of the Product.',
    description: 'Description of the product.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'Price of the Product.',
    description: 'Price of the product.',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'HsnCode that product belongs to.',
    description: 'Price of the product.',
  })
  @IsString()
  hsnCode: string;

  @ApiProperty({
    example: ['product-image-id1', 'product-image-id2'],
    description: 'Image ids of the products.',
    required: false,
  })
  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  productImageIds?: string[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Samsung Galaxy S24 Ultra Premium.',
    description: 'information of the product.',
  })
  productInformation: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    example: false,
    description: 'Is it new?',
    required: false,
  })
  isNew?: boolean = false;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    example: false,
    description: 'Is this product trending?',
    required: false,
  })
  isTrending?: boolean = false;

  @IsUUID()
  @ApiProperty({
    example: 'category-id',
    description: 'Category Id of the Product.',
  })
  categoryId: string;

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  @ApiProperty({
    example: ['option-id-1', 'option-id-2'],
    description: 'Product Options Ids.',
    required: false,
  })
  optionIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  @ApiProperty({
    example: ['variant-id-1', 'variant-id-2'],
    description: 'Variant Ids that are available for this product.',
    required: false,
  })
  variantIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  @ApiProperty({
    example: ['review-id-1', 'review-id-2'],
    description: 'Reviews Ids that are available for this product.',
    required: false,
  })
  reviewIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  @ApiProperty({
    example: ['discount-id-1', 'discount-id-2'],
    description: 'Dicounts Ids that are available for this product.',
    required: false,
  })
  discountIds?: string[];
}
