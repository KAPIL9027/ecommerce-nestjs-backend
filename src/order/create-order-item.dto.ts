import { IsNumber, IsString } from "class-validator";

export class CreateOrderItemDto {
    @IsString()
    orderId: string

    @IsString()
    variantId: string

    @IsNumber()
    quantity: number

    @IsNumber()
    price: number
}