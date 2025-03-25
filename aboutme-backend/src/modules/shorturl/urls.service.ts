import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateShortUrlDto, UpdateShortUrlDto } from './dto';
import { ShortUrl } from './entities';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(ShortUrl) private readonly urlRepository: Repository<ShortUrl>) {}

  async getUrls(): Promise<ShortUrl[]> {
    return await this.urlRepository.find();
  }
  async getUrl(id: number): Promise<ShortUrl> {
    const url: ShortUrl = await this.urlRepository.findOneBy({id});
    if(!url) throw new NotFoundException();
    else return url;
  }
  async createUrl(body: CreateShortUrlDto): Promise<ShortUrl> {
    const url: ShortUrl = await this.urlRepository.create({
      oldUrl: body.oldUrl,
      newUrl: body.newUrl
    })
    return this.urlRepository.save(url);
  }
  async updateUrl(id: number, body: UpdateShortUrlDto): Promise<ShortUrl> {
    const url: ShortUrl = await this.urlRepository.preload({
      id,
      oldUrl: body.oldUrl,
      newUrl: body.newUrl
    })
    if(!url) throw new NotFoundException("Resource not found");
    else this.urlRepository.save(url);
    return url;
  }
  async deleteUrl(id: number): Promise<JSON> {
    const url: ShortUrl = await this.urlRepository.findOneBy({id});
    if(!url) throw new NotFoundException("Resource not found");
    else {
      this.urlRepository.remove(url);
      return JSON.parse(`{"deletedId": "${id}"}`);
    }
  }
}
