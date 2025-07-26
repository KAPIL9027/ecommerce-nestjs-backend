import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateProductVariantOptionDto {
  @ApiProperty({
    example: 'Color',
    description: 'Name of the product variant option.',
  })
  @IsString()
  name: string;
  @ApiProperty({
    example: 'Red',
    description: 'Value of the product variant option.',
  })
  @IsString()
  value: string;

  @ApiProperty({
    example: 'variant-id',
    description: 'VariantId this variant-option relates to.',
  })
  @IsUUID()
  productVariantId: string;
}
