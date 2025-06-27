import { Controller, Delete, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CounterService } from './counter.service';
import { Count } from './entities';

@Controller('y2k/counter')
export class CounterController {
    constructor(private readonly configService: ConfigService, private readonly counterService: CounterService) {};

    @Get()
    getCounter(): Promise<Count> {
        return this.counterService.getCounter();
    }
    @Delete()
    deleteCounter(): Promise<JSON> {
        return this.counterService.deleteCounter();
    }
}
