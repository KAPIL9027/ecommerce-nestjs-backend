import {
  ConflictException,
  Get,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { CreateReviewDto } from './create-review.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { Request } from 'express';
import { UpdateReviewDto } from './update-review.dto';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class ReviewService {
  constructor(
    private prismaService: PrismaService,
    private readonly logger: PinoLogger,
  ) {
    logger.setContext(ReviewService.name);
  }

  async getReview(reviewId: string) {
    try {
      const review = await this.prismaService.review.findUnique({
        where: {
          id: reviewId,
        },
      });
      if (!review) {
        throw new NotFoundException('404 Not Found!');
      }
      this.logger.info({ reviewId }, 'Successfully Fetched the Review');
      return {
        message: 'Successfully Fetched Review',
        review,
      };
    } catch (e) {
      this.logger.error(e, 'No Review Found with the provided ID!');
      throw e;
    }
  }
  async createReview(
    productId: string,
    req: Request,
    createReviewDto: CreateReviewDto,
  ) {
    try {
      // TODO: Check if the user has ordered this product
      let dataObj = {
        rating: createReviewDto.rating,
        product: {
          connect: {
            id: productId,
          },
        },
        user: {
          connect: {
            id: req.user!.userId,
          },
        },
      };
      if (createReviewDto.title) dataObj['title'] = createReviewDto.title;
      if (createReviewDto.comment) dataObj['comment'] = createReviewDto.comment;
      await this.prismaService.review.create({
        data: dataObj,
      });

      this.logger.info('Review Created Successfully!');
      return {
        message: 'Review Created Successfully, Thank you!',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2002'
      ) {
        this.logger.error(
          e,
          'User has already submitted a review for this product',
        );
        throw new ConflictException(
          e,
          'You have already submitted a review for this product',
        );
      }
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'Cannot find any User with the given ID!');
        throw new NotFoundException('404 Not Found Exception');
      }
      this.logger.error(e, 'Create Review Service Failed!');
      throw new InternalServerErrorException('500 Internal Server Error');
    }
  }

  async updateReview(reviewId: string, updateReviewData: UpdateReviewDto) {
    try {
      await this.prismaService.review.update({
        where: {
          id: reviewId,
        },
        data: updateReviewData,
      });
      this.logger.info({ reviewId }, 'Successfully updated the Review!');
      return {
        message: 'Successfully Updated the Review!',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error('No Review Found with this ID!');
        throw new NotFoundException(e, '404 Not Found!');
      }
      throw new InternalServerErrorException('500 Internal Server Error');
    }
  }

  async deleteReview(reviewId: string) {
    try {
      await this.prismaService.review.delete({
        where: {
          id: reviewId,
        },
      });

      this.logger.info({ reviewId }, 'Successfully Deleted the Review');
      return {
        message: 'Successfully Deleted the Review',
      };
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        this.logger.error(e, 'No Review Found with the given ReviewId');
        throw new NotFoundException('404 Not Found!');
      }
      this.logger.error(e, 'Delete Review Service Failed!');
      throw new InternalServerErrorException('500 Internal Server Error!');
    }
  }
}
