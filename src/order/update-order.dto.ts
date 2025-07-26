import { ApiProperty } from '@nestjs/swagger';
import { OrderStatus } from '@prisma/client';
import { IsIn, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsIn(Object.values(OrderStatus))
  @ApiProperty({
    example: 'PAID',
    description: 'New status of the order, you want to update.',
    required: false,
  })
  status?: OrderStatus;
}
