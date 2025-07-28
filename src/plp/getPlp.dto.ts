import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PlpDto {
  @ApiProperty({
    example: 2,
    description: 'Page Number that you want to get.',
    required: false,
  })
  @IsNumber()
  page: number;

  @ApiProperty({
    example: 10,
    description: 'Size of Each Page.',
  })
  @IsNumber()
  pageSize: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: 'Brand Name',
    description: 'Name of the brand.',
    required: false,
  })
  brand: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    example: false,
    description: 'Do you only want new products?',
    required: false,
  })
  isNew: boolean;

  @IsIn(['createdAt', 'price', 'salesCount'])
  @IsOptional()
  @ApiProperty({
    example: 'createdAt',
    description:
      'Choose one of the sortBy options: createdAt, price, salesCount',
    required: false,
  })
  sortBy: 'createdAt' | 'price' | 'salesCount';

  @IsIn(['asc', 'desc'])
  @IsOptional()
  @ApiProperty({
    example: 'asc',
    description: 'Choose one of the sortOrder options: asc, desc',
    required: false,
  })
  sortOrder: 'asc' | 'desc';
}
