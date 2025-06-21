import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './create-review.dto';
import { Request } from 'express';
import { JWTCookieGuard } from 'src/user/valid-user.guard';
import { UpdateReviewDto } from './update-review.dto';

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService){

    }

    @UseGuards(JWTCookieGuard)
    @Get('/:reviewId')
    async getReview(@Param('reviewId') reviewId: string){
        return this.reviewService.getReview(reviewId);
    }

    @UseGuards(JWTCookieGuard)
    @Post(':productId')
    async createReview(@Param('productId') productId: string, @Req() req: Request,@Body() reqBody: CreateReviewDto){
        return this.reviewService.createReview(productId,req,reqBody);
    }

    @UseGuards(JWTCookieGuard)
    @Patch(':reviewId')
    async updateReview(@Param('reviewId') reviewId: string, @Body() reqBody: UpdateReviewDto){
        return this.reviewService.updateReview(reviewId,reqBody);
    }

    @UseGuards(JWTCookieGuard)
    @Delete('/:reviewId')
    async deleteReview(@Param('reviewId') reviewId: string){
        return this.reviewService.deleteReview(reviewId);
    }
}
