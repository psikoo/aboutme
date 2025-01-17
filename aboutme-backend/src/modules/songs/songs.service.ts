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
        cover: await this.getCoverUrl(body.url)
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
        cover: await this.getCoverUrl(body.url)
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
    
    async getCoverUrl(url: string):Promise<string> {
      console.log("https://api.spotify.com/v1/tracks/"+url.slice(31))
      console.log(process.env.SPOTIFY_KEY)
      await fetch("https://api.spotify.com/v1/tracks/"+url.slice(31), {
        method: "GET", headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer " + process.env.SPOTIFY_KEY
        }
      }).then((response) => {
        console.log(response.json().then(
          (data) => { 
            console.log(data)
            return data.album.images[0].url;
          }
        ));
      });
      return "Error fetching cover";
    }
}
