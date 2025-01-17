import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './entities';
import { CreateSongDto, UpdateSongDto } from './dto';

@Injectable()
export class SongsService {
    constructor(@InjectRepository(Song) private readonly userRepository: Repository<Song>) {}

    async getSongs(): Promise<Song[]> {
      return await this.userRepository.find();
    }
    async getSong(id: number): Promise<Song> {
      const user: Song = await this.userRepository.findOneBy({id});
      if(!user) throw new NotFoundException();
      else return user;
    }
    async createSong(body: CreateSongDto): Promise<Song> {
      const user: Song = await this.userRepository.create({
        url: body.url,
        tag: body.tag,
        sfw: body.sfw,
        name: body.name,
        cover: body.cover
      })
      return this.userRepository.save(user);
    }
    async updateSong(id: number, body: UpdateSongDto): Promise<Song> {
      const user: Song = await this.userRepository.preload({
        id,
        url: body.url,
        tag: body.tag,
        sfw: body.sfw,
        name: body.name,
        cover: body.cover
      })
      if(!user) throw new NotFoundException("Resource not found");
      else this.userRepository.save(user);
      return user;
    }
    async deleteSong(id: number): Promise<JSON> {
      const user: Song = await this.userRepository.findOneBy({id});
      if(!user) throw new NotFoundException("Resource not found");
      else {
        this.userRepository.remove(user);
        return JSON.parse(`{"deletedId": "${id}"}`);
      }
    }
}
