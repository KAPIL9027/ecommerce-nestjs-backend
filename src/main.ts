import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { doubleCsrf } from 'csrf-csrf';
import { NextFunction, Request, Response } from 'express';

const { doubleCsrfProtection, generateCsrfToken } = doubleCsrf({
  getSecret: () => process.env.CSRF_SECRET_KEY!,
  getSessionIdentifier: (req) => {
    return req.cookies['token'] || 'anonymous';
  },
});
export const generateToken = generateCsrfToken;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    crendentials: true,
  });
  app.use(helmet());
  app.use(cookieParser());

  // exclude user route for csrf protection
  app.use((req: Request, res: Response, next: NextFunction) => {
    const skipCsrfCheckRoutes = ['/user/signin', '/user/signup'];
    if (skipCsrfCheckRoutes.includes(req.path)) return next();
    return doubleCsrfProtection(req, res, next);
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
