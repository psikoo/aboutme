import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { Url } from './entities';
import { CreateUrlDto, UpdateUrlDto } from './dto';

@Controller('urls')
export class UrlsController {
    constructor(private readonly userService: UrlsService) {};
  
    @Get()
    getUsers(): Promise<Url[]> {
      return this.userService.getUsers();
    }
    @Get(":id")
    getUser(@Param("id") id: number): Promise<Url> {
      return this.userService.getUser(id);
    }
    @Post()
    createUser(@Body() body: CreateUrlDto): Promise<Url> { //TODO add protection
      console.log("[Urls] create - "+body.name.toString());
      return this.userService.createUser(body);
    }
    @Patch(":id")
    updateUser(@Param("id") id: number, @Body() body: UpdateUrlDto): Promise<Url> { //TODO add protection
      console.log("[Urls] update - "+body.name.toString());
      return this.userService.updateUser(id, body);
    }
    @Delete(":id")
    deleteUser(@Param("id") id: number): Promise<JSON> { //TODO add protection
      console.log("[Urls] delete - "+id);
      return this.userService.deleteUser(id);
    }
}
