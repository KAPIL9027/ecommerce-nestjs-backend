import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateDiscountDto {
  @ApiProperty({
    example: '10% OFF',
    description: 'Title of the discount that to be created.',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example: 'Get 10% off on all the order above Rs. 300.',
    description: 'Description of the discount that to be created',
  })
  @IsString()
  description: string;

  @ApiProperty({
    example: 'PERCENTAGE',
    description: 'Choose the type of the discount. Is it PERCENTAGE or AMOUNT?',
  })
  @IsIn(['PERCENTAGE', 'AMOUNT'])
  type: 'PERCENTAGE' | 'AMOUNT';

  @ApiProperty({
    example: 400,
    description: 'Amount of the discount (value of percentage or amount).',
  })
  @IsNumber()
  amount: number;

  @Type(() => Date)
  @IsDate()
  @ApiProperty({
    example: '2025-07-10T00:00:00.000Z',
    description: 'Start Date of the Discount.',
  })
  startDate: Date;

  @Type(() => Date)
  @IsDate()
  @ApiProperty({
    example: '2025-07-20T23:59:59.999Z',
    description: 'End Date of the Discount.',
  })
  endDate: Date;

  @IsBoolean()
  active: boolean;
  @IsIn(['PRODUCT', 'VARIANT', 'CATEGORY', 'CART'])
  @ApiProperty({
    example: 'PRODUCT',
    description:
      'Choose one of the things, it applies to. PRODUCT/VARIANT/CATEGORY/CART?',
  })
  appliesTo: 'PRODUCT' | 'VARIANT' | 'CATEGORY' | 'CART';

  @IsBoolean()
  @ApiProperty({
    example: false,
    description: 'Is this Discount Combinable with other discounts?',
  })
  combinable: boolean;

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    example: ['product-id-1', 'product-id-2'],
    description: 'Product Ids, it relates to.',
    required: false,
  })
  productIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    example: ['variant-id-1', 'variant-id-2'],
    description: 'Variant Ids, it relates to.',
    required: false,
  })
  variantIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    example: ['category-id-1', 'category-id-2'],
    description: 'Category Ids, it relates to.',
    required: false,
  })
  categoryIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    example: ['code-id-1', 'code-id-2'],
    description: 'Code Ids, it relates to.',
    required: false,
  })
  codeIds: string[];
}
