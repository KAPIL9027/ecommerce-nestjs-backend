import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { csrfMiddleware } from './csrf.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(Logger));
  app.enableCors({
    crendentials: true,
  });
  app.use(helmet());
  app.use(cookieParser());
  app.use(csrfMiddleware);

  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Ecommerce API')
    .setDescription(
      'This document contains all the endpoints that are needed for an ecommerce api such as product, variant, discount, discountcode, user, review, pdp, plp, shippingaddress, payment, cms. It uses the power of nestjs, prisma, postgreSQL, cloudinary to provide seamless, fast, secure experience. Please try the below available endpoints before intergrating this wonderful api with your application. Thanks, enjoy everything for free, now no need to use those costly apis.',
    )
    .setVersion('1.0')
    .addTag('ecommerce')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
