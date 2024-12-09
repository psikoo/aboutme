import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  private users: User[] = [{
    id: "1",
    name: "psikoo/Caitlyn",
    age: 19,
    birthday: "oct 2005",
    gender: "Gender fluid",
    pronouns: "He/She/It",
    orientation: "Finsexual",
    quote: "Despite everything, it's still you.",
    intro: "hewoo! I'm a dev that loves the scene aesthetic (as you can see x3). I love gaming and hanging out in VC >.<",
    mood: "Silly"
  }];

  getUsers(): User[] {
    return this.users;
  }
  getUser(id: string): User {
    const user: User = this.users.find((item) => item.id === id);
    if(!user) throw new NotFoundException();
    else return user;
  }
  createUser(body: CreateUserDto): User { //TODO add protection
    const id: string = (Math.floor(Math.random()*200)+1).toString();
    this.users.push({
      id: id,
      name: body.name,
      age: body.age,
      birthday: body.birthday,
      gender: body.gender,
      pronouns: body.pronouns,
      orientation: body.orientation,
      quote: body.quote,
      intro: body.intro,
      mood: body.mood
    })
    return this.getUser(id);
  }
  updateUser(id: string, body: UpdateUserDto): User { //TODO add protection
    const user = this.getUser(id);
    if(!user) throw new NotFoundException();
    else {
      user.name = body.name;
      user.age = body.age;
      user.birthday = body.birthday;
      user.gender = body.gender;
      user.pronouns = body.pronouns;
      user.orientation = body.orientation;
      user.quote = body.quote;
      user.intro = body.intro;
      user.mood = body.mood;
      return user;
    }
  }
  deleteUser(id: string): JSON { //TODO add protection
    const index = this.users.findIndex((user) => user.id === id);
    if(!index) throw new NotFoundException();
    else if(index >= 0) {
      this.users.splice(index+1, 1);
      return JSON.parse(`{"deletedUser": "${id}"}`);
    }
  }
}
