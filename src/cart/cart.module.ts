import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { JwtService } from '@nestjs/jwt';
import { DiscountsService } from 'src/discounts/discounts.service';

@Module({
  controllers: [CartController],
  providers: [CartService, JwtService, DiscountsService]
})
export class CartModule {}
