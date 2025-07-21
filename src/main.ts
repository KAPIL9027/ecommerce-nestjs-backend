import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
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
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
function csurf(arg0: {
  cookie: { httpOnly: boolean; sameSite: string; secure: boolean };
}): any {
  throw new Error('Function not implemented.');
}
