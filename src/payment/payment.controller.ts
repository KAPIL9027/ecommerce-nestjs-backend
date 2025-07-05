import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { RolesGuard } from 'src/user/admin-user.guard';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { CreatePaymentDto } from './create-payment.dto';

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService){
        
    }

    @Post()
    @UseGuards(JWTCookieGuard,RolesGuard)
    @Roles('ADMIN')
    async createPayment(@Body() createPaymentBody: CreatePaymentDto){
        return this.paymentService.createPayment(createPaymentBody);
    }
}
