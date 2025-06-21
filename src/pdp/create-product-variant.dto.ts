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

class VariantImageInput {
  @IsString()
  url: string;

  @IsOptional()
  @IsString()
  alt?: string;
}

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
  @ValidateNested({ each: true })
  @Type(() => VariantImageInput)
  @IsOptional()
  images?: VariantImageInput[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  discountIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  cartItemsIds?: string[];
}
