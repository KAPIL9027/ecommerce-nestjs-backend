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

export class UpdateDiscountDto {
  @ApiProperty({
    example: 'New-Discount-Title',
    description: 'New Title for this Discount.',
    required: false,
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({
    example: 'New-Description',
    description: 'New Description for this Discount.',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'PERECENTAGE',
    description: 'New Discount Type(PERCENTAGE|AMOUNT) for this Discount.',
    required: false,
  })
  @IsOptional()
  @IsIn(['PERCENTAGE', 'AMOUNT'])
  type?: 'PERCENTAGE' | 'AMOUNT';

  @ApiProperty({
    example: 1000,
    description: 'New Amount for this Discount.',
    required: false,
  })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiProperty({
    example: '2025-07-10T00:00:00.000Z',
    description: 'New StartDate for this Discount.',
    required: false,
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  startDate?: Date;

  @ApiProperty({
    example: '2025-15-10T00:00:00.000Z',
    description: 'New EndDate for this Discount.',
    required: false,
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  endDate?: Date;

  @ApiProperty({
    example: false,
    description: 'New Active Value for this Discount.',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiProperty({
    example: 'PRODUCT',
    description: 'New appliesTo Value for this Discount.',
    required: false,
  })
  @IsOptional()
  @IsIn(['PRODUCT', 'VARIANT', 'CATEGORY', 'CART'])
  appliesTo?: 'PRODUCT' | 'VARIANT' | 'CATEGORY' | 'CART';

  @ApiProperty({
    example: false,
    description: 'Change if this Discount is combinable or not?',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  combinable?: boolean;

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    example: ['new-product-id-1', 'new-product-id-2'],
    description:
      'Relate this Discount with different products than current ones.',
    required: false,
  })
  productIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    example: ['new-product-variant-id-1', 'new-product-variant-id-2'],
    description:
      'Relate this Discount with different product-variants than current ones.',
    required: false,
  })
  variantIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    example: ['new-category-id-1', 'new-category-id-2'],
    description:
      'Relate this Discount with different categories than current ones.',
    required: false,
  })
  categoryIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  @ApiProperty({
    example: ['new-code-id-1', 'new-code-id-2'],
    description:
      'Relate this Discount with different discountcodes than current ones.',
    required: false,
  })
  codeIds?: string[];
}
