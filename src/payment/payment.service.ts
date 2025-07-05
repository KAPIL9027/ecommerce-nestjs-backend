import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreatePaymentDto } from './create-payment.dto';
import { Prisma } from '@prisma/client';

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
}
