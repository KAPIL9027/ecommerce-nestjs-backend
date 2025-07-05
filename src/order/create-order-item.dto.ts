import { IsNumber, IsString } from "class-validator";

export class CreateOrderItemDto {
    @IsString()
    variantId: string

    @IsNumber()
    quantity: number

    @IsNumber()
    price: number
}