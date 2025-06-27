import * as fs from 'fs'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

export let app;
const httpsOptions = {
  key: fs.readFileSync("/etc/letsencrypt/live/"+process.env.URL+"/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/"+process.env.URL+"/cert.pem"),
};
async function bootstrap() {
  app = await NestFactory.create(AppModule, { httpsOptions });
  app.setGlobalPrefix("api");
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true
  }))
  await app.listen(AppModule.port);
}
bootstrap();
