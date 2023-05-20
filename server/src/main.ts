import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { rawBody: true });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({ credentials: true, origin: process.env.CLIENT_URI });
  app.useBodyParser('json', { limit: '10mb' });

  await app.listen(4000);
}
bootstrap();
