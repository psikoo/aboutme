import { Injectable, NotFoundException } from '@nestjs/common';
import { Url } from './entities';
import { CreateUrlDto, UpdateUrlDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UrlsService {
  constructor(@InjectRepository(Url) private readonly userRepository: Repository<Url>) {}
  
    async getUsers(): Promise<Url[]> {
      return await this.userRepository.find();
    }
    async getUser(id: number): Promise<Url> {
      const user: Url = await this.userRepository.findOneBy({id});
      if(!user) throw new NotFoundException();
      else return user;
    }
    async createUser(body: CreateUrlDto): Promise<Url> { //TODO add protection
      const user: Url = await this.userRepository.create({
        url: body.url,
        tag: body.tag,
        sfw: body.sfw,
        name: body.name
      })
      return this.userRepository.save(user);
    }
    async updateUser(id: number, body: UpdateUrlDto): Promise<Url> { //TODO add protection
      const user: Url = await this.userRepository.preload({
        id,
        url: body.url,
        tag: body.tag,
        sfw: body.sfw,
        name: body.name
      })
      if(!user) throw new NotFoundException("Resource not found");
      else this.userRepository.save(user);
      return user;
    }
    async deleteUser(id: number): Promise<JSON> { //TODO add protection
      const user: Url = await this.userRepository.findOneBy({id});
      if(!user) throw new NotFoundException("Resource not found");
      else {
        this.userRepository.remove(user);
        return JSON.parse(`{"deletedId": "${id}"}`);
      }
    }
}
