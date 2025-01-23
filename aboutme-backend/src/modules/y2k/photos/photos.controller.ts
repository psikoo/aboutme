import { Body, Controller, Headers, Delete, Get, Param, Patch, Post, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Photo } from './entities';
import { CreatePhotoDto, UpdatePhotoDto } from './dto';
import { PhotosService } from './photos.service';

@Controller('y2k/photos')
export class PhotosController {
  constructor(private readonly configService: ConfigService, private readonly photoService: PhotosService) {};

  @Get()
  getPhotos(): Promise<Photo[]> {
    return this.photoService.getPhotos();
  }
  @Get(":id")
  getPhoto(@Param("id") id: number): Promise<Photo> {
    return this.photoService.getPhoto(id);
  }
  @Post()
  createPhoto(@Headers('apiKey') apiKey: string, @Body() body: CreatePhotoDto): Promise<Photo> {
    return this.photoService.createPhoto(body);
  }
  @Patch(":id")
  updatePhoto(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdatePhotoDto): Promise<Photo> {
    return this.photoService.updatePhoto(id, body);
  }
  @Delete(":id")
  deletePhoto(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    return this.photoService.deletePhoto(id);
  }
}
