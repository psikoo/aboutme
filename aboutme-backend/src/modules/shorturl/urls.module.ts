import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './urls.service';
import { UsersController } from './urls.controller';
import { ShortUrl } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([ShortUrl])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
