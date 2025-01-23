import { Body, Controller, Headers, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { Blog } from './entities';
import { CreateBlogDto, UpdateBlogDto } from './dto';
import { BlogsService } from './blogs.service';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly configService: ConfigService, private readonly blogService: BlogsService) {};

  @Get()
  getBlogs(): Promise<Blog[]> {
    return this.blogService.getBlogs();
  }
  @Get(":id")
  getBlog(@Param("id") id: number): Promise<Blog> {
    return this.blogService.getBlog(id);
  }
  @Post()
  createBlog(@Headers('apiKey') apiKey: string, @Body() body: CreateBlogDto): Promise<Blog> {
    return this.blogService.createBlog(body);
  }
  @Patch(":id")
  updateBlog(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateBlogDto): Promise<Blog> {
    return this.blogService.updateBlog(id, body);
  }
  @Delete(":id")
  deleteBlog(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    return this.blogService.deleteBlog(id);
  }
}
