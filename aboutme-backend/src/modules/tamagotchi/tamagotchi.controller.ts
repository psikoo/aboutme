import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { TamagotchiService } from './tamagotchi.service';

@Controller('tamagotchi')
export class TamagotchiController {
    constructor(private readonly tamagotchiService: TamagotchiService) {};

    @Get("tamagotchi")
    getTamagotchi(): Promise<JSON> {
        return this.tamagotchiService.getTamagotchi();
    }
    @Get("play")
    getPlay(): Promise<JSON> {
        return this.tamagotchiService.getPlay();
    }
    @Get("feed")
    getFeed(): Promise<JSON> {
        return this.tamagotchiService.getFeed();
    }
    @Get("rest")
    getRest(): Promise<JSON> {
        return this.tamagotchiService.getRest();
    }
    @Get("reload")
    getReload(): Promise<JSON> {
        return this.tamagotchiService.getReload();
    }
    @Get("new")
    getNew(): Promise<JSON> {
        return this.tamagotchiService.getNew();
    }
}
