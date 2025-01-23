import { Controller, Headers, Delete, Get, Param, Patch, Post, Body } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Interest } from './entities';
import { CreateInterestDto, UpdateInterestDto } from './dto';
import { InterestsService } from './interests.service';

@Controller('y2k/interests')
export class InterestsController {
  constructor(private readonly configService: ConfigService, private readonly interestService: InterestsService) {};

  @Get()
  getInterests(): Promise<Interest[]> {
    return this.interestService.getInterests();
  }
  @Get(":id")
  getInterest(@Param("id") id: number): Promise<Interest> {
    return this.interestService.getInterest(id);
  }
  @Post()
  createInterest(@Headers('apiKey') apiKey: string, @Body() body: CreateInterestDto): Promise<Interest> {
    return this.interestService.createInterest(body);
  }
  @Patch(":id")
  updateInterest(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateInterestDto): Promise<Interest> {
    return this.interestService.updateInterest(id, body);
  }
  @Delete(":id")
  deleteInterest(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    return this.interestService.deleteInterest(id);
  }
}
