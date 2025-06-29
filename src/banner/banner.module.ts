import { Module } from '@nestjs/common';
import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [BannerService, JwtService],
  controllers: [BannerController]
})
export class BannerModule {}
