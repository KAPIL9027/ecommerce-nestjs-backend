import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HomepageModule } from './homepage/homepage.module';
import { PrismaService } from './prisma.service';
import { PrismaModule } from './prisma.module';
import { UserModule } from './user/user.module';
import { PlpModule } from './plp/plp.module';
import { PdpModule } from './pdp/pdp.module';
import { CartModule } from './cart/cart.module';
import { DiscountsModule } from './discounts/discounts.module';
import { ReviewModule } from './review/review.module';
import { ImageModule } from './image/image.module';
import { CategoryModule } from './category/category.module';
import { BannerModule } from './banner/banner.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { ShippingAddressModule } from './shipping-address/shipping-address.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { CustomThrottlerGuard } from './custom-throttler.guard';
import { LoggerModule } from 'nestjs-pino';
import { WishlistModule } from './wishlist/wishlist.module';

const isProd = process.env.NODE_ENV === 'production' ? true : false;
@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: !isProd
          ? {
              target: 'pino-pretty',
              options: {
                colorize: true,
                translatedTime: 'yyyy-mm-dd HH:MM:ss.l',
                ignore: 'pid,hostname',
              },
            }
          : undefined,
        autoLogging: true,
        level: isProd ? 'info' : 'debug',
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 100,
        },
      ],
    }),
    HomepageModule,
    PrismaModule,
    UserModule,
    PlpModule,
    PdpModule,
    CartModule,
    DiscountsModule,
    ReviewModule,
    ImageModule,
    CategoryModule,
    BannerModule,
    OrderModule,
    PaymentModule,
    ShippingAddressModule,
    WishlistModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: APP_GUARD, useClass: CustomThrottlerGuard },
  ],
})
export class AppModule {}
