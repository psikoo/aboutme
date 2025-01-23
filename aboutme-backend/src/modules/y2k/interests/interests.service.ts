import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Interest } from './entities';
import { CreateInterestDto, UpdateInterestDto } from './dto';

@Injectable()
export class InterestsService {
  constructor(@InjectRepository(Interest) private readonly interestRepository: Repository<Interest>) {}

  async getInterests(): Promise<Interest[]> {
    return await this.interestRepository.find();
  }
  async getInterest(id: number): Promise<Interest> {
    const interest: Interest = await this.interestRepository.findOneBy({id});
    if(!interest) throw new NotFoundException();
    else return interest;
  }
  async createInterest(body: CreateInterestDto): Promise<Interest> {
    const interest: Interest = await this.interestRepository.create({
      name: body.name,
      tag: body.tag,
      sfw: body.sfw,
      text: body.text
    })
    return this.interestRepository.save(interest);
  }
  async updateInterest(id: number, body: UpdateInterestDto): Promise<Interest> {
    const interest: Interest = await this.interestRepository.preload({
      id,
      name: body.name,
      tag: body.tag,
      sfw: body.sfw,
      text: body.text
    })
    if(!interest) throw new NotFoundException("Resource not found");
    else this.interestRepository.save(interest);
    return interest;
  }
  async deleteInterest(id: number): Promise<JSON> {
    const interest: Interest = await this.interestRepository.findOneBy({id});
    if(!interest) throw new NotFoundException("Resource not found");
    else {
      this.interestRepository.remove(interest);
      return JSON.parse(`{"deletedId": "${id}"}`);
    }
  }
}
