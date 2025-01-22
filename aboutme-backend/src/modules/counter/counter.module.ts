import { Module } from '@nestjs/common';
import { CounterController } from './counter.controller';
import { CounterService } from './counter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Count } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Count])],
  controllers: [CounterController],
  providers: [CounterService]
})
export class CounterModule {}
