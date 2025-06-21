import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsIn, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDiscountDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsIn(['PERCENTAGE', 'AMOUNT'])
  type: 'PERCENTAGE' | 'AMOUNT';

  @IsNumber()
  amount: number;

  @Type(()=> Date)
  @IsDate()
  startDate: Date;

  @Type(()=> Date)
  @IsDate()
  endDate: Date;

  @IsBoolean()
  active: boolean;
  @IsIn(['PRODUCT', 'VARIANT', 'CATEGORY', 'CART'])
  appliesTo: 'PRODUCT' | 'VARIANT' | 'CATEGORY' | 'CART';

  @IsBoolean()
  combinable: boolean;

  @IsOptional()
  @IsArray()
  @IsUUID("all",{each: true})
  productIds?: string[]

  @IsOptional()
  @IsArray()
  @IsUUID("all",{each: true})
  variantIds?: string[]

  @IsOptional()
  @IsArray()
  @IsUUID("all",{each: true})
  categoryIds?: string[]
  
  @IsOptional()
  @IsArray()
  @IsUUID("all",{each: true})
   codeIds: string[]

}
