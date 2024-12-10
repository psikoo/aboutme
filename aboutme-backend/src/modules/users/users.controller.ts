import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './entities';
import { CreateUserDto, UpdateUserDto } from './dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {};

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }
  @Get(":id")
  getUser(@Param("id") id: number): Promise<User> {
    return this.userService.getUser(id);
  }
  @Post()
  createUser(@Body() body: CreateUserDto): Promise<User> { //TODO add protection
    console.log(body)
    return this.userService.createUser(body);
  }
  @Patch(":id")
  updateUser(@Param("id") id: number, @Body() body: UpdateUserDto): Promise<User> { //TODO add protection
    return this.userService.updateUser(id, body);
  }
  @Delete(":id")
  deleteUser(@Param("id") id: number): Promise<JSON> { //TODO add protection
    return this.userService.deleteUser(id);
  }
}
