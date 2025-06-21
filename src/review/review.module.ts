import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ReviewController],
  providers: [ReviewService,JwtService]
})
export class ReviewModule {}
