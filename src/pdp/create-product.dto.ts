import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

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
  @IsOptional()
  productImageIds?: string[];

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
  @IsOptional()
  optionIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  variantIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  reviewIds?: string[];

  @IsArray()
  @IsUUID('4', { each: true })
  @IsOptional()
  discountIds?: string[];
}
