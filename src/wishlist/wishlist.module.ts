import { Module } from '@nestjs/common';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [WishlistController],
  providers: [WishlistService, JwtService],
})
export class WishlistModule {}
