import { OrderStatus } from '@prisma/client';
import { IsIn, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @IsOptional()
  @IsIn(Object.values(OrderStatus))
  status?: OrderStatus;
}
