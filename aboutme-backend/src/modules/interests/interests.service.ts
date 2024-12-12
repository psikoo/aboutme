import { Injectable, NotFoundException } from '@nestjs/common';
import { Interest } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInterestDto, UpdateInterestDto } from './dto';

@Injectable()
export class InterestsService {
  constructor(@InjectRepository(Interest) private readonly interestRepository: Repository<Interest>) {}

  async getInterests(): Promise<Interest[]> {
    return await this.interestRepository.find();
  }
  async getInterest(id: number): Promise<Interest> {
    const user: Interest = await this.interestRepository.findOneBy({id});
    if(!user) throw new NotFoundException();
    else return user;
  }
  async createInterest(body: CreateInterestDto): Promise<Interest> {
    const user: Interest = await this.interestRepository.create({
      name: body.name,
      tag: body.tag,
      sfw: body.sfw,
      text: body.text
    })
    return this.interestRepository.save(user);
  }
  async updateInterest(id: number, body: UpdateInterestDto): Promise<Interest> {
    const user: Interest = await this.interestRepository.preload({
      id,
      name: body.name,
      tag: body.tag,
      sfw: body.sfw,
      text: body.text
    })
    if(!user) throw new NotFoundException("Resource not found");
    else this.interestRepository.save(user);
    return user;
  }
  async deleteInterest(id: number): Promise<JSON> {
    const user: Interest = await this.interestRepository.findOneBy({id});
    if(!user) throw new NotFoundException("Resource not found");
    else {
      this.interestRepository.remove(user);
      return JSON.parse(`{"deletedId": "${id}"}`);
    }
  }
}
