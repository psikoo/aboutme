import { Body, Controller, Headers, Delete, Get, Param, Patch, Post, UnauthorizedException } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { Url } from './entities';
import { CreateUrlDto, UpdateUrlDto } from './dto';
import { ConfigService } from '@nestjs/config';

@Controller('urls')
export class UrlsController {
    constructor(private readonly configService: ConfigService, private readonly userService: UrlsService) {};

    @Get()
    getUsers(): Promise<Url[]> {
      return this.userService.getUsers();
    }
    @Get(":id")
    getUser(@Param("id") id: number): Promise<Url> {
      return this.userService.getUser(id);
    }
    @Post()
    createUser(@Headers('apiKey') apiKey: string, @Body() body: CreateUrlDto): Promise<Url> {
      return this.userService.createUser(body);
    }
    @Patch(":id")
    updateUser(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateUrlDto): Promise<Url> {
      return this.userService.updateUser(id, body);
    }
    @Delete(":id")
    deleteUser(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
      return this.userService.deleteUser(id);
    }
}
