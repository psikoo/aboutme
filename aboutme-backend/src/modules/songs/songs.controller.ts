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
      return this.userService.createSong(body);
    }
    @Patch(":id")
    updateSong(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateSongDto): Promise<Song> {
      return this.userService.updateSong(id, body);
    }
    @Delete(":id")
    deleteSong(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
      return this.userService.deleteSong(id);
    }
}
