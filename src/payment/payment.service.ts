import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePaymentDto } from './create-payment.dto';
import crypto from "crypto";
import { VerifyPaymentDto } from './verify-payment.dto';

@Injectable()
export class PaymentService {
    constructor(private readonly prismaService: PrismaService){

    }

    async createPayment(createPaymentBody: CreatePaymentDto){
        try{
            const createdPayment = await this.prismaService.payment.create({
               data: createPaymentBody
            });
            return {
                message: "Successfully created the Payment",
                createdPayment
            }
        }
        catch(e){
            throw e
        }
    }

    async verifyPayment(verifyPaymentBody: VerifyPaymentDto){
        const body = verifyPaymentBody.razorpayOrderId + "|"+verifyPaymentBody.razorpayPaymentId;
        const expectedSignature = crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECRET!).update(body.toString()).digest("hex");

        const isValid = expectedSignature === verifyPaymentBody.razorpaySignature;
        if(!isValid)
            throw new NotAcceptableException("Not Valid Signature/PayLoad Provided!");
        return {
            message: "Payment Details verified Successfully!"
        }
    }
}
