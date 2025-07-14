import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { Request } from 'express';
import { RolesGuard } from 'src/user/admin-user.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { UpdateOrderDto } from './update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/checkout')
  @UseGuards(JWTCookieGuard)
  async checkout(@Req() req: Request) {
    return this.orderService.checkout(req);
  }

  @Get()
  @UseGuards(JWTCookieGuard)
  async getAllOrders(@Req() req: Request) {
    return this.orderService.getAllOrders(req);
  }

  @Patch('/:updateOrderId')
  @UseGuards(JWTCookieGuard, RolesGuard)
  @Roles('ADMIN')
  async updateOrder(
    @Param('updateOrderId') orderId: string,
    @Body() updateOrderBody: UpdateOrderDto,
  ) {
    return this.orderService.updateOrder(orderId, updateOrderBody);
  }

  @Patch('/delete-order/:deleteOrderId')
  @UseGuards(JWTCookieGuard, RolesGuard)
  @Roles('ADMIN')
  async deleteOrder(@Param('deleteOrderId') orderId: string) {
    return this.orderService.deleteOrder(orderId);
  }
}
