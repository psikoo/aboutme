import { Body, Controller, Headers, Delete, Get, Param, Patch, Post, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PhotosService } from './photos.service';
import { Photo } from './entities';
import { CreatePhotoDto, UpdatePhotoDto } from './dto';

@Controller('photos')
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
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Photos] create - "+body.name.toString());
      return this.photoService.createPhoto(body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Patch(":id")
  updatePhoto(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdatePhotoDto): Promise<Photo> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Photos] update - "+body.name.toString());
      return this.photoService.updatePhoto(id, body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Delete(":id")
  deletePhoto(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Photos] delete - "+id);
      return this.photoService.deletePhoto(id);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
}
