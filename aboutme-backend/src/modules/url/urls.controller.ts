import { Body, Controller, Delete, Get, Headers, Param, Patch, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { UsersService } from './urls.service';
import { Url } from './entities';
import { CreateUrlDto, UpdateUrlDto } from './dto';

@Controller('y2k/users')
export class UsersController {
  constructor(private readonly configService: ConfigService, private readonly userService: UsersService) {};

  @Get()
  getUrls(): Promise<Url[]> {
    return this.userService.getUrls();
  }
  @Get(":id")
  getUrl(@Param("id") id: number): Promise<Url> {
    return this.userService.getUrl(id);
  }
  @Post()
  createUrl(@Headers('apiKey') apiKey: string, @Body() body: CreateUrlDto): Promise<Url> {
    return this.userService.createUrl(body);
  }
  @Patch(":id")
  updateUrl(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateUrlDto): Promise<Url> {
    return this.userService.updateUrl(id, body);
  }
  @Delete(":id")
  deleteUrl(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    return this.userService.deleteUrl(id);
  }
}
