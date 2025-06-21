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
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsIn(['PERCENTAGE', 'AMOUNT'])
  type?: 'PERCENTAGE' | 'AMOUNT';

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  startDate?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  endDate?: Date;

  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @IsOptional()
  @IsIn(['PRODUCT', 'VARIANT', 'CATEGORY', 'CART'])
  appliesTo?: 'PRODUCT' | 'VARIANT' | 'CATEGORY' | 'CART';

  @IsOptional()
  @IsBoolean()
  combinable?: boolean;

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  productIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  variantIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  categoryIds?: string[];

  @IsOptional()
  @IsArray()
  @IsUUID('all', { each: true })
  codeIds?: string[];
}
