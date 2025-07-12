import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { JwtService } from '@nestjs/jwt';
import { DiscountsService } from 'src/discounts/discounts.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, JwtService, DiscountsService],
})
export class OrderModule {}
