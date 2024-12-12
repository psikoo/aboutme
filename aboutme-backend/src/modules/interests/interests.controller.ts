import { Controller, Headers, Delete, Get, Param, Patch, Post, UnauthorizedException, Body } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InterestsService } from './interests.service';
import { Interest } from './entities';
import { CreateInterestDto, UpdateInterestDto } from './dto';

@Controller('interests')
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
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Interests] create - "+body.name.toString());
      return this.interestService.createInterest(body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Patch(":id")
  updateInterest(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateInterestDto): Promise<Interest> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Interests] update - "+body.name.toString());
      return this.interestService.updateInterest(id, body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Delete(":id")
  deleteInterest(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Interests] delete - "+id);
      return this.interestService.deleteInterest(id);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
}
