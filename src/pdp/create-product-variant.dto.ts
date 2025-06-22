import {
  IsUUID,
  IsString,
  IsNumber,
  IsInt,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductVariantDto {
  @IsUUID()
  productId: string;

  @IsString()
  sku: string;

  @IsNumber()
  price: number;

  @IsInt()
  stock: number;

  @IsArray()
  @IsOptional()
  optionsIds?: string[];

  @IsArray()
  @IsOptional()
  imagesIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  discountIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  cartItemsIds?: string[];
}
