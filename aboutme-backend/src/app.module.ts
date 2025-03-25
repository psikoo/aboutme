import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicPasswordMiddleware, LoggerMiddleware } from './middleware';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/y2k/users/users.module';
import { SongsModule } from './modules/y2k/songs/songs.module';
import { UrlsModule } from './modules/y2k/urls/urls.module';
import { ProjectsModule } from './modules/y2k/projects/projects.module';
import { CounterModule } from './modules/y2k/counter/counter.module';
import { TamagotchiModule } from './modules/tamagotchi/tamagotchi.module';
import { ShortUrl } from './modules/shorturl/entities';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule, 
            UsersModule, SongsModule, UrlsModule, ProjectsModule, CounterModule,
            ShortUrl,
            TamagotchiModule],
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
