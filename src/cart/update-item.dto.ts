import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class UpdateItemDto {
  @ApiProperty({
    example: 2,
    description: 'quantity of the item to be updated',
  })
  @IsInt()
  quantity: number;
}
