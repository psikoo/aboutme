import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './shorturls.service';
import { UsersController } from './shorturls.controller';
import { ShortUrl } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ShortUrl])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
