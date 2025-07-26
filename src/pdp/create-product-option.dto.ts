import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateProductOptionDto {
  @ApiProperty({
    example: 'Color',
    description: 'Product Option such as Color, Size, Type.',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'product-id',
    description: 'Product Id that option relates to.',
  })
  @IsUUID()
  productId: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({
    example: ['value-id-1', 'value-id-2'],
    description: 'ValuesIds that option relates to.',
    required: false,
  })
  valuesIds?: string[];
}
