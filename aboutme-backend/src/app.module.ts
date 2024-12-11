import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestsModule } from './modules/interests/interests.module';
import { SongsModule } from './modules/songs/songs.module';
import { UrlsModule } from './modules/urls/urls.module';
import { PhotosModule } from './modules/photos/photos.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { BlogsModule } from './modules/blogs/blogs.module';

@Module({
  imports: [UsersModule, InterestsModule, SongsModule, UrlsModule, PhotosModule, ProjectsModule, BlogsModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "root",
    password: "root",
    database: "aboutmeDB",
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
