import fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

export let app;
const httpsOptions = {
  key: fs.readFileSync(process.env.PRIVATE_KEY),
  cert: fs.readFileSync(process.env.PUBLIC_KEY),
};
async function bootstrap() {
  app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true
  }))
  await app.listen(AppModule.port);
}
bootstrap();
