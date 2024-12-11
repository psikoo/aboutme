import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  providers: [SongsService],
  controllers: [SongsController]
})
export class SongsModule {}
