import {CartItem} from './cart-item.dto'
import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";

export class CreateCartDto {
    @IsArray()
    @ValidateNested({each: true})
    @Type(()=> CartItem)
    items: CartItem[]
}