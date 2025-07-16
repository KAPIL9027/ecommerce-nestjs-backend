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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
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
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    { provide: APP_GUARD, useClass: CustomThrottlerGuard },
  ],
})
export class AppModule {}
