import { Module } from '@nestjs/common';
import { DiscountsController } from './discounts.controller';
import { DiscountsService } from './discounts.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [DiscountsController],
  providers: [DiscountsService,JwtService]
})
export class DiscountsModule {}
