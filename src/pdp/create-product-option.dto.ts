
import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';


export class CreateProductOptionDto {
  @IsString()
  name: string;

  @IsUUID()
  productId: string;

  @IsArray()
  @IsOptional()
  valuesIds?: string[];
}
