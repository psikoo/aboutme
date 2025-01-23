import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Photo } from './entities';
import { CreatePhotoDto, UpdatePhotoDto } from './dto';

@Injectable()
export class PhotosService {
  constructor(@InjectRepository(Photo) private readonly photoRepository: Repository<Photo>) {}

  async getPhotos(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }
  async getPhoto(id: number): Promise<Photo> {
    const photo: Photo = await this.photoRepository.findOneBy({id});
    if(!photo) throw new NotFoundException();
    else return photo;
  }
  async createPhoto(body: CreatePhotoDto): Promise<Photo> {
    const photo: Photo = await this.photoRepository.create({
      url: body.url,
      tag: body.tag,
      sfw: body.sfw,
      name: body.name,
      description: body.description,
      date: body.date
    })
    return this.photoRepository.save(photo);
  }
  async updatePhoto(id: number, body: UpdatePhotoDto): Promise<Photo> {
    const photo: Photo = await this.photoRepository.preload({
      id,
      url: body.url,
      tag: body.tag,
      sfw: body.sfw,
      name: body.name,
      description: body.description,
      date: body.date
    })
    if(!photo) throw new NotFoundException("Resource not found");
    else this.photoRepository.save(photo);
    return photo;
  }
  async deletePhoto(id: number): Promise<JSON> {
    const photo: Photo = await this.photoRepository.findOneBy({id});
    if(!photo) throw new NotFoundException("Resource not found");
    else {
      this.photoRepository.remove(photo);
      return JSON.parse(`{"deletedId": "${id}"}`);
    }
  }
}
