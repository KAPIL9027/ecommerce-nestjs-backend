import { OrderStatus } from "@prisma/client";
import { IsArray, IsIn, IsNumber, IsOptional, ValidateNested } from "class-validator";
import { CreateOrderItemDto } from "./create-order-item.dto";
import { Type } from "class-transformer";

export class UpdateOrderDto {
    @IsOptional()
    @IsIn(Object.values(OrderStatus))
    status?: OrderStatus;
}