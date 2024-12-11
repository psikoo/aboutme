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
      if(apiKey === this.configService.get("API_KEY")) {
        console.log("[Urls] create - "+body.name.toString());
        return this.userService.createUser(body);
      } else throw new UnauthorizedException("Invalid apiKey");
    }
    @Patch(":id")
    updateUser(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateUrlDto): Promise<Url> {
      if(apiKey === this.configService.get("API_KEY")) {
        console.log("[Urls] update - "+body.name.toString());
        return this.userService.updateUser(id, body);
      } else throw new UnauthorizedException("Invalid apiKey");
    }
    @Delete(":id")
    deleteUser(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
      if(apiKey === this.configService.get("API_KEY")) {
        console.log("[Urls] delete - "+id);
        return this.userService.deleteUser(id);
      } else throw new UnauthorizedException("Invalid apiKey");
    }
}
