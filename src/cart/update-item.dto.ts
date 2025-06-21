import { IsInt, IsString } from "class-validator";

export class UpdateItemDto {
    @IsInt()
    quantity: number
}