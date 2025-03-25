import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUrlDto, UpdateUrlDto } from './dto';
import { Url } from './entities';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Url) private readonly urlRepository: Repository<Url>) {}

  async getUrls(): Promise<Url[]> {
    return await this.urlRepository.find();
  }
  async getUrl(id: number): Promise<Url> {
    const url: Url = await this.urlRepository.findOneBy({id});
    if(!url) throw new NotFoundException();
    else return url;
  }
  async createUrl(body: CreateUrlDto): Promise<Url> {
    const url: Url = await this.urlRepository.create({
      oldUrl: body.oldUrl,
      newUrl: body.newUrl
    })
    return this.urlRepository.save(url);
  }
  async updateUrl(id: number, body: UpdateUrlDto): Promise<Url> {
    const url: Url = await this.urlRepository.preload({
      id,
      oldUrl: body.oldUrl,
      newUrl: body.newUrl
    })
    if(!url) throw new NotFoundException("Resource not found");
    else this.urlRepository.save(url);
    return url;
  }
  async deleteUrl(id: number): Promise<JSON> {
    const url: Url = await this.urlRepository.findOneBy({id});
    if(!url) throw new NotFoundException("Resource not found");
    else {
      this.urlRepository.remove(url);
      return JSON.parse(`{"deletedId": "${id}"}`);
    }
  }
}
