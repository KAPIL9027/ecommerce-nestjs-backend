import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [CartController],
  providers: [CartService, JwtService]
})
export class CartModule {}
