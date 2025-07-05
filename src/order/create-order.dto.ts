import { OrderStatus } from '@prisma/client';
import { IsArray, IsIn, IsNumber, ValidateNested } from 'class-validator';
import { CreateOrderItemDto } from './create-order-item.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];

  @IsIn(Object.values(OrderStatus))
  status: OrderStatus;
}
