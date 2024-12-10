import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
})
export class UrlsModule {}
