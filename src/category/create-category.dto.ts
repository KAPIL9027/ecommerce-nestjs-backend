import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Makeup',
    description: 'Title of the category.',
  })
  @IsString()
  title: string;
  @ApiProperty({
    example: 'maybeline_makeup',
    description: 'Slug of the category.',
  })
  @IsString()
  slug: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'parentid',
    description: 'Id of the parent category if any.',
    required: false,
  })
  parentId?: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['subcategory-id-1', 'subcategory-id-2'],
    description: 'Ids of the subcategories if any.',
    required: false,
  })
  subCategoriesIds?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['product-id-1', 'product-id-2'],
    description: 'Ids of the products if any.',
    required: false,
  })
  productsIds?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['image-id-1', 'image-id-2'],
    description: 'Ids of the images if any.',
    required: false,
  })
  imagesIds?: string[];

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['discount-id-1', 'discount-id-2'],
    description: 'Ids of the discounts if any.',
    required: false,
  })
  discountsIds?: string[];
}
