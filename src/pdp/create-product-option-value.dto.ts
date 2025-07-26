import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class CreateProductOptionValueDto {
  @ApiProperty({
    example: 'RED',
    description: 'Product Option Value such as (Color : (Value: Red))',
  })
  @IsString()
  value: string;

  @ApiProperty({
    example: 'option-id',
    description: 'Product option ID.',
  })
  @IsUUID()
  optionId: string;
}
