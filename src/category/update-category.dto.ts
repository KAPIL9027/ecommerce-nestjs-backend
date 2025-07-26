import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'New Title',
    description: 'New title string.',
    required: false,
  })
  title?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'New Slug',
    description: 'New slug string.',
    required: false,
  })
  slug?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'new-parent-category-id',
    description: 'Replace current parent id with a new one.',
    required: false,
  })
  parentId?: string;

  @IsArray()
  @IsOptional()
  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['new-subcategory-id-1', 'new-subcategory-id-2'],
    description: 'Replace current subcategories with the new ones.',
    required: false,
  })
  subCategoriesIds?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['new-product-id-1', 'new-product-id-2'],
    description: 'Replace current products with the new ones.',
    required: false,
  })
  productsIds?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['new-image-id-1', 'new-image-id-2'],
    description: 'Replace current images with the new ones.',
    required: false,
  })
  imagesIds?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['new-discount-id-1', 'new-discount-id-2'],
    description: 'Replace current discounts ids with the new ones.',
    required: false,
  })
  discountsIds?: string[];
}
