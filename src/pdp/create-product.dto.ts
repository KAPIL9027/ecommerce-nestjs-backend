import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    example: 'Samsung',
    description: 'Brand name of the product.',
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({
    example: 'Samsung Galaxy S24 Ultra',
    description: 'Title of the product.',
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Description of the Product.',
    description: 'Description of the product.',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'Price of the Product.',
    description: 'Price of the product.',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 'HsnCode that product belongs to.',
    description: 'Price of the product.',
  })
  @IsString()
  hsnCode: string;

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
