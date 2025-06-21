import { Module } from '@nestjs/common';
import { PdpController } from './pdp.controller';
import { PdpService } from './pdp.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [PdpController],
  providers: [PdpService, JwtService]
})
export class PdpModule {}
