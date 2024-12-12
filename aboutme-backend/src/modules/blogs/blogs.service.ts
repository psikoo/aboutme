import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities';
import { CreateBlogDto, UpdateBlogDto } from './dto';

@Injectable()
export class BlogsService {
  constructor(@InjectRepository(Blog) private readonly userRepository: Repository<Blog>) {}

  async getBlogs(): Promise<Blog[]> {
    return await this.userRepository.find();
  }
  async getBlog(id: number): Promise<Blog> {
    const user: Blog = await this.userRepository.findOneBy({id});
    if(!user) throw new NotFoundException();
    else return user;
  }
  async createBlog(body: CreateBlogDto): Promise<Blog> {
    const user: Blog = await this.userRepository.create({
      name: body.name,
      tag: body.tag,
      sfw: body.sfw,
      description: body.description,
      date: body.date
    })
    return this.userRepository.save(user);
  }
  async updateBlog(id: number, body: UpdateBlogDto): Promise<Blog> {
    const user: Blog = await this.userRepository.preload({
      id,
      name: body.name,
      tag: body.tag,
      sfw: body.sfw,
      description: body.description,
      date: body.date
    })
    if(!user) throw new NotFoundException("Resource not found");
    else this.userRepository.save(user);
    return user;
  }
  async deleteBlog(id: number): Promise<JSON> {
    const user: Blog = await this.userRepository.findOneBy({id});
    if(!user) throw new NotFoundException("Resource not found");
    else {
      this.userRepository.remove(user);
      return JSON.parse(`{"deletedId": "${id}"}`);
    }
  }
}
