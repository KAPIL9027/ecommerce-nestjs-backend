import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, ValidateIf } from 'class-validator';

export enum RelationType {
  BANNER = 'BANNER',
  CATEGORY = 'CATEGORY',
  PRODUCT = 'PRODUCT',
  PRODUCT_VARIANT = 'PRODUCT_VARIANT',
}

export class UpdateImageDto {
  @ApiProperty({
    example: 'https://www.image-new-url.com/image-1',
    description: 'New Url of this image',
    required: false,
  })
  @IsString()
  @IsOptional()
  url: string;

  @ApiProperty({
    example: 'New Alt Text',
    description: 'New Alt Text of the Image',
    required: false,
  })
  @IsString()
  @IsOptional()
  altText: string;

  @IsEnum(RelationType)
  @IsOptional()
  @ApiProperty({
    example: 'PRODUCT',
    description: 'New relationType of this image.',
    required: false,
  })
  relationType?: RelationType;

  @ValidateIf((o) => o.relationType)
  @IsString()
  @ApiProperty({
    example: 'new-product-id-1',
    description:
      'Relate this Image with a different product/category/banner/product-variant than current one.',
    required: false,
  })
  relationId?: string;
}
