import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlsModule } from './modules/urls/urls.module';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "aboutmeDB",
    autoLoadEntities: true,
    synchronize: true
  }), UrlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
