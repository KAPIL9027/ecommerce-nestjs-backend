import { Module } from '@nestjs/common';
import { PlpService } from './plp.service';
import { PlpController } from './plp.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [PlpService, JwtService],
  controllers: [PlpController]
})
export class PlpModule {}
