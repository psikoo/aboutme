import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './urls.service';
import { UsersController } from './urls.controller';
import { Url } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
