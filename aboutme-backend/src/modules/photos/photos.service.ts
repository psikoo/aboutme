import { Injectable, NotFoundException } from '@nestjs/common';
import { Photo } from './entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePhotoDto, UpdatePhotoDto } from './dto';

@Injectable()
export class PhotosService {
  constructor(@InjectRepository(Photo) private readonly userRepository: Repository<Photo>) {}

  async getPhotos(): Promise<Photo[]> {
    return await this.userRepository.find();
  }
  async getPhoto(id: number): Promise<Photo> {
    const user: Photo = await this.userRepository.findOneBy({id});
    if(!user) throw new NotFoundException();
    else return user;
  }
  async createPhoto(body: CreatePhotoDto): Promise<Photo> {
    const user: Photo = await this.userRepository.create({
      url: body.url,
      tag: body.tag,
      sfw: body.sfw,
      name: body.name,
      description: body.description,
      date: body.date
    })
    return this.userRepository.save(user);
  }
  async updatePhoto(id: number, body: UpdatePhotoDto): Promise<Photo> {
    const user: Photo = await this.userRepository.preload({
      id,
      url: body.url,
      tag: body.tag,
      sfw: body.sfw,
      name: body.name,
      description: body.description,
      date: body.date
    })
    if(!user) throw new NotFoundException("Resource not found");
    else this.userRepository.save(user);
    return user;
  }
  async deletePhoto(id: number): Promise<JSON> {
    const user: Photo = await this.userRepository.findOneBy({id});
    if(!user) throw new NotFoundException("Resource not found");
    else {
      this.userRepository.remove(user);
      return JSON.parse(`{"deletedId": "${id}"}`);
    }
  }
}
