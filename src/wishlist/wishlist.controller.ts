import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { WishlistItemDto } from './wishlist.dto';
import { Request } from 'express';
import { RemoveWishlistItemDto } from './remove-wishlist-item.dto';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get()
  @UseGuards(JWTCookieGuard)
  async getAllWishlistedItems(@Req() req: Request) {
    return this.wishlistService.getAllWishlistedItems(req);
  }
  @Post()
  @UseGuards(JWTCookieGuard)
  async wishlistItem(
    @Body() wishlistItem: WishlistItemDto,
    @Req() req: Request,
  ) {
    return this.wishlistService.wishlist(wishlistItem, req);
  }

  @Delete()
  @UseGuards(JWTCookieGuard)
  async deleteWishlistItem(
    @Body() removeWishlistItemDto: RemoveWishlistItemDto,
    @Req() req: Request,
  ) {
    return this.wishlistService.removeFromWishlist(removeWishlistItemDto, req);
  }
}
