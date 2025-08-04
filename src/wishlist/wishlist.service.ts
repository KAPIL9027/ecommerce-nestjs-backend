import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/prisma.service';
import { WishlistItemDto } from './wishlist.dto';
import { Request } from 'express';
import { Prisma } from '@prisma/client';

@Injectable()
export class WishlistService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {
    this.logger.setContext('Wishlist Service');
  }

  async wishlist(wishlistDto: WishlistItemDto, req: Request) {
    try {
      const wishlistedItem = await this.prismaService.wishlistItem.create({
        data: {
          user: {
            connect: {
              id: req.user!.userId,
            },
          },
          product: {
            connect: {
              id: wishlistDto.productVariantId,
            },
          },
        },
      });
      this.logger.info(
        { wishlistItemId: wishlistedItem.id },
        'Successfully wishlisted the provided product.',
      );
      return {
        message: 'Successfully wishlisted the provided product.',
        wishlistedItem,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No ProductVariant found with this ID.');
        throw e;
      }
      this.logger.error(e, 'OOPS, Something went Wrong. Internal Server Error');
      throw e;
    }
  }
}
