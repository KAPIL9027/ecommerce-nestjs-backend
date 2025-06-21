import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
      secret: 'dfdf'
    })],
  controllers: [UserController],
  providers: [UserService, JwtService]
})
export class UserModule {}
