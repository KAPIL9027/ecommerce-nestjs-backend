import { OrderStatus } from "@prisma/client";
import { IsArray, IsIn, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateOrderDto{
    @IsString()
    userId: string
    @IsArray()
    itemsIds: string[]
    @IsNumber()
    total: number
    @IsIn(Object.values(OrderStatus))
    status: OrderStatus
}