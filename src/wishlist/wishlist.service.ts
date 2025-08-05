import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';
import { PrismaService } from 'src/prisma.service';
import { WishlistItemDto } from './wishlist.dto';
import { Request } from 'express';
import { Prisma } from '@prisma/client';
import { RemoveWishlistItemDto } from './remove-wishlist-item.dto';

@Injectable()
export class WishlistService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {
    this.logger.setContext('Wishlist Service');
  }

  async getAllWishlistedItems(req: Request) {
    try {
      const wishlistedItems = await this.prismaService.wishlistItem.findMany({
        where: {
          userId: req.user!.userId,
        },
      });
      return {
        message: 'Successfully Fetched all the Wishlisted Items.',
        wishlistedItems,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(e, 'No User Found with this ID!');
        throw new NotFoundException('No User Found with this ID!');
      }
      this.logger.error(e, 'OOPS, Something Went Wrong!');
      throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
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
      this.logger.error(e, 'OOPS, Something Went Wrong!');
      throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
  }

  async removeFromWishlist(
    removeFromWishlistDto: RemoveWishlistItemDto,
    req: Request,
  ) {
    try {
      const deletedWishlistItem = await this.prismaService.wishlistItem.delete({
        where: {
          userId: req.user!.userId,
          id: removeFromWishlistDto.wishlistItemId,
        },
      });
      return {
        message: 'Successfully Deleted the Wishlishted Item!',
        deletedWishlistItem,
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.warn(
          e,
          'No WishlistItem/User Found with the given Id Provided.',
        );
        throw e;
      }
      this.logger.error(e, 'OOPS, Something Went Wrong!');
      throw new InternalServerErrorException('OOPS, Something Went Wrong!');
    }
  }
}
