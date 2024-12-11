import { Body, Controller, Delete, Get, Headers, Param, Patch, Post, UnauthorizedException } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './entities';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ConfigService } from '@nestjs/config';

@Controller('users')
export class UsersController {
  constructor(private readonly configService: ConfigService, private readonly userService: UsersService) {};

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
  @Get(":id")
  getUser(@Param("id") id: number): Promise<User> {
    return this.userService.getUser(id);
  }
  @Post()
  createUser(@Headers('apiKey') apiKey: string, @Body() body: CreateUserDto): Promise<User> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Users] create - "+body.name.toString());
      return this.userService.createUser(body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Patch(":id")
  updateUser(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateUserDto): Promise<User> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Users] update - "+body.name.toString());
      return this.userService.updateUser(id, body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Delete(":id")
  deleteUser(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Users] delete - "+id);
      return this.userService.deleteUser(id);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
}
