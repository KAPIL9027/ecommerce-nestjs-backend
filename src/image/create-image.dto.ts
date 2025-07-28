import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum RelationType {
  BANNER = 'BANNER',
  CATEGORY = 'CATEGORY',
  PRODUCT = 'PRODUCT',
  PRODUCT_VARIANT = 'PRODUCT_VARIANT',
}

export class CreateImageDto {
  @ApiProperty({
    example: 'https://www.images.com/343434',
    description: 'URL of the image.',
  })
  @IsString()
  url: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: '/image/product-image1',
    description: 'AltText of the image.',
    required: false,
  })
  altText: string;

  @ApiProperty({
    example: 'PRODUCT',
    description:
      'Relate this image to a category/banner/product/product-variant.',
  })
  @IsEnum(RelationType)
  relationType: RelationType;

  @ApiProperty({
    example: ['new-product-id-1', 'new-product-id-2'],
    description: 'Relation Id with a product/banner/category/product-variant.',
  })
  @IsString()
  relationId: string;
}
