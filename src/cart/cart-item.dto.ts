import { IsInt, IsNumber, IsString, Min } from "class-validator";

export class CartItem {
    @IsString()
    variantId: string
    @IsInt()
    @Min(1)
    quantity: number
}