import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import {Logger, ValidationPipe} from "@nestjs/common";

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(
      PORT,
      () => {
        logger.log(`Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`)
      }
      );
}
await bootstrap();
