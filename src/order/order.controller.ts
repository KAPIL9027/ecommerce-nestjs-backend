import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './create-order.dto';
import { JWTCookieGuard } from 'src/user/valid-user.guard';

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService){

    }

    // to be tested
    @Post()
    @UseGuards(JWTCookieGuard)
    async createOrder(@Body() createOrderBody: CreateOrderDto){
        return this.orderService.createOrder(createOrderBody)
    }
}
