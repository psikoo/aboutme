import { Body, Controller, Headers, Delete, Get, Param, Patch, Post, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Song } from './entities';
import { CreateSongDto, UpdateSongDto } from './dto';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
    constructor(private readonly configService: ConfigService, private readonly userService: SongsService) {};

    @Get()
    getUsers(): Promise<Song[]> {
      return this.userService.getSongs();
    }
    @Get(":id")
    getSong(@Param("id") id: number): Promise<Song> {
      return this.userService.getSong(id);
    }
    @Post()
    createSong(@Headers('apiKey') apiKey: string, @Body() body: CreateSongDto): Promise<Song> {
      if(apiKey === this.configService.get("API_KEY")) {
        console.log("[Urls] create - "+body.name.toString());
        return this.userService.createSong(body);
      } else throw new UnauthorizedException("Invalid apiKey");
    }
    @Patch(":id")
    updateSong(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateSongDto): Promise<Song> {
      if(apiKey === this.configService.get("API_KEY")) {
        console.log("[Urls] update - "+body.name.toString());
        return this.userService.updateSong(id, body);
      } else throw new UnauthorizedException("Invalid apiKey");
    }
    @Delete(":id")
    deleteSong(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
      if(apiKey === this.configService.get("API_KEY")) {
        console.log("[Urls] delete - "+id);
        return this.userService.deleteSong(id);
      } else throw new UnauthorizedException("Invalid apiKey");
    }
}
