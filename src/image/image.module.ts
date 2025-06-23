import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ImageController],
  providers: [ImageService,JwtService]
})
export class ImageModule {}
