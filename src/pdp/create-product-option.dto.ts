import { ProductOptionValue } from '@prisma/client';
import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';
import { CreateProductOptionValueDto } from './create-product-option-value.dto';

export class CreateProductOptionDto {
  @IsString()
  name: string;

  @IsUUID()
  productId: string;

  @IsArray()
  @IsOptional()
  valuesIds?: string[];
}
