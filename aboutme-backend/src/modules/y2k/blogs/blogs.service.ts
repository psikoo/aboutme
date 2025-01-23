import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Blog } from './entities';
import { CreateBlogDto, UpdateBlogDto } from './dto';

@Injectable()
export class BlogsService {
  constructor(@InjectRepository(Blog) private readonly blogRepository: Repository<Blog>) {}

  async getBlogs(): Promise<Blog[]> {
    return await this.blogRepository.find();
  }
  async getBlog(id: number): Promise<Blog> {
    const blog: Blog = await this.blogRepository.findOneBy({id});
    if(!blog) throw new NotFoundException();
    else return blog;
  }
  async createBlog(body: CreateBlogDto): Promise<Blog> {
    const blog: Blog = await this.blogRepository.create({
      name: body.name,
      tag: body.tag,
      sfw: body.sfw,
      description: body.description,
      date: body.date
    })
    return this.blogRepository.save(blog);
  }
  async updateBlog(id: number, body: UpdateBlogDto): Promise<Blog> {
    const blog: Blog = await this.blogRepository.preload({
      id,
      name: body.name,
      tag: body.tag,
      sfw: body.sfw,
      description: body.description,
      date: body.date
    })
    if(!blog) throw new NotFoundException("Resource not found");
    else this.blogRepository.save(blog);
    return blog;
  }
  async deleteBlog(id: number): Promise<JSON> {
    const blog: Blog = await this.blogRepository.findOneBy({id});
    if(!blog) throw new NotFoundException("Resource not found");
    else {
      this.blogRepository.remove(blog);
      return JSON.parse(`{"deletedId": "${id}"}`);
    }
  }
}
