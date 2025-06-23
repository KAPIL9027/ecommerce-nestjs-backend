import { IsString, IsOptional, IsEnum, ValidateIf } from 'class-validator';

export enum RelationType {
  BANNER = 'BANNER',
  CATEGORY = 'CATEGORY',
  PRODUCT = 'PRODUCT',
  PRODUCT_VARIANT = 'PRODUCT_VARIANT',
}

export class UpdateImageDto {
  @IsString()
  @IsOptional()
  url: string;

  @IsString()
  @IsOptional()
  altText: string;

  @IsEnum(RelationType)
  @IsOptional()
  relationType?: RelationType;

  @ValidateIf((o)=> o.relationType)
  @IsString()
  relationId?: string;
}
