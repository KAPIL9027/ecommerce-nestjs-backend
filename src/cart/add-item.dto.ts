import { IsInt, IsString } from "class-validator";

export class AddItemDto{
    @IsString()
    variantId: string;
    @IsString()
    cartId: string;
    @IsInt()
    quantity: number;
}