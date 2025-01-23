import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Count } from './entities';

@Injectable()
export class CounterService {
  constructor(@InjectRepository(Count) private readonly counterRepository: Repository<Count>) {}

  async getCounter(): Promise<Count> {
    const previousCounter: Count = await this.counterRepository.findOneBy({id:0});
    const newCount = previousCounter.count+1;
    const counter: Count = await this.counterRepository.preload({
      id: 0,
      count: newCount,
    });
    this.counterRepository.save(counter);
    return counter;
  }

  async deleteCounter(): Promise<JSON> {
    const counter: Count = await this.counterRepository.preload({
      id: 0,
      count: 0,
    });
    this.counterRepository.save(counter);
    return JSON.parse(`{"Counter": "0"}`);
  }
}
