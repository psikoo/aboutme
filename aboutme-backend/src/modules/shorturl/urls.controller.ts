import { Body, Controller, Delete, Get, Headers, Param, Patch, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { UsersService } from './urls.service';
import { ShortUrl } from './entities';
import { CreateShortUrlDto, UpdateShortUrlDto } from './dto';

@Controller('y2k/users')
export class UsersController {
  constructor(private readonly configService: ConfigService, private readonly userService: UsersService) {};

  @Get()
  getUrls(): Promise<ShortUrl[]> {
    return this.userService.getUrls();
  }
  @Get(":id")
  getUrl(@Param("id") id: number): Promise<ShortUrl> {
    return this.userService.getUrl(id);
  }
  @Post()
  createUrl(@Headers('apiKey') apiKey: string, @Body() body: CreateShortUrlDto): Promise<ShortUrl> {
    return this.userService.createUrl(body);
  }
  @Patch(":id")
  updateUrl(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateShortUrlDto): Promise<ShortUrl> {
    return this.userService.updateUrl(id, body);
  }
  @Delete(":id")
  deleteUrl(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    return this.userService.deleteUrl(id);
  }
}
