import { PaymentStatus } from "@prisma/client";
import { IsIn, IsNumber, IsString } from "class-validator";

export class CreatePaymentDto {
    @IsString()
    orderId: string

    @IsString()
    provider: string

    @IsIn(Object.values(PaymentStatus))
    status: PaymentStatus

    @IsNumber()
    amount: number
}