import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ImageInput {
  @IsString()
  @IsNotEmpty()
  url: string;

  @IsOptional()
  @IsString()
  alt?: string;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  price: number;

  @IsArray()
  @IsUUID('4', { each: true })
  productImageIds: string[];

  @IsString()
  @IsNotEmpty()
  productInformation: string;

  @IsBoolean()
  @IsOptional()
  isNew?: boolean = false;

  @IsBoolean()
  @IsOptional()
  isTrending?: boolean = false;

  @IsUUID()
  categoryId: string;

  @IsArray()
  @IsUUID('4', { each: true })
  optionIds: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  variantIds: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  reviewIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  discountIds?: string[];
}
