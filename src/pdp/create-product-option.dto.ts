import { ProductOptionValue } from '@prisma/client';
import { IsArray, IsString, IsUUID } from 'class-validator';
import { CreateProductOptionValueDto } from './create-product-option-value.dto';

export class CreateProductOptionDto {
  @IsString()
  name: string;

  @IsUUID()
  productId: string;

  @IsArray()
  valuesIds: string[];
}
