import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config';
import { HomepageModule } from './homepage/homepage.module';
import { PrismaService } from './prisma.service';
import { PrismaModule } from './prisma.module';
import { UserModule } from './user/user.module';
import { PlpModule } from './plp/plp.module';
import { PdpModule } from './pdp/pdp.module';
import { CartModule } from './cart/cart.module';
import { DiscountsModule } from './discounts/discounts.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),HomepageModule, PrismaModule, UserModule, PlpModule, PdpModule, CartModule, DiscountsModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
