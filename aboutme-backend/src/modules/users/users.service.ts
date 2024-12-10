import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }
  async getUser(id: number): Promise<User> {
    const user: User = await this.userRepository.findOneBy({id});
    if(!user) throw new NotFoundException();
    else return user;
  }
  async createUser(body: CreateUserDto): Promise<User> { //TODO add protection
    const user: User = await this.userRepository.create({
      name: body.name,
      age: body.age,
      birthday: body.birthday,
      gender: body.gender,
      pronouns: body.pronouns,
      orientation: body.orientation,
      quote: body.quote,
      intro: body.intro,
      mood: body.mood,
    })
    return this.userRepository.save(user);
  }
  async updateUser(id: number, body: UpdateUserDto): Promise<User> { //TODO add protection
    const user: User = await this.userRepository.preload({
      id,
      name: body.name,
      age: body.age,
      birthday: body.birthday,
      gender: body.gender,
      pronouns: body.pronouns,
      orientation: body.orientation,
      quote: body.quote,
      intro: body.intro,
      mood: body.mood,
    })
    if(!user) throw new NotFoundException("Resource not found");
    else this.userRepository.save(user);
    return user;
  }
  async deleteUser(id: number): Promise<JSON> { //TODO add protection
    const user: User = await this.userRepository.findOneBy({id});
    if(!user) throw new NotFoundException("Resource not found");
    else {
      this.userRepository.remove(user);
      return JSON.parse(`{"deletedUser": "${id}"}`);
    }
  }
}
