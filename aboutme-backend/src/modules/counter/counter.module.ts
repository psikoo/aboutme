import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Count } from './entities';
import { CounterService } from './counter.service';
import { CounterController } from './counter.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Count])],
  controllers: [CounterController],
  providers: [CounterService]
})
export class CounterModule {}
