import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicPasswordMiddleware, LoggerMiddleware } from './middleware';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/y2k/users/users.module';
import { InterestsModule } from './modules/y2k/interests/interests.module';
import { SongsModule } from './modules/y2k/songs/songs.module';
import { UrlsModule } from './modules/y2k/urls/urls.module';
import { PhotosModule } from './modules/y2k/photos/photos.module';
import { ProjectsModule } from './modules/y2k/projects/projects.module';
import { BlogsModule } from './modules/y2k/blogs/blogs.module';
import { CounterModule } from './modules/y2k/counter/counter.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, 
            UsersModule, InterestsModule, SongsModule, UrlsModule, PhotosModule, ProjectsModule, BlogsModule, CounterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  static port: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get("PORT");
  }
  // Middleware
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware, BasicPasswordMiddleware)
      .exclude({ path: "favicon.ico", method: RequestMethod.GET })
      .forRoutes({ path:"*", method:RequestMethod.ALL});
  }
}
