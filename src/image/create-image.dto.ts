import { IsString, IsOptional, IsEnum } from 'class-validator';

export enum RelationType {
    BANNER = 'BANNER',
    CATEGORY = 'CATEGORY',
    PRODUCT = 'PRODUCT',
    PRODUCT_VARIANT = 'PRODUCT_VARIANT'
}

export class CreateImageDto {
  @IsString()
  url: string;

  @IsString()
  @IsOptional()
  altText: string;

  @IsEnum(RelationType)
  relationType: RelationType;

  @IsString()
  relationId: string;
}



