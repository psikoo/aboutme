import { Body, Controller, Headers, Get, Param, Post, UnauthorizedException, Patch, Delete } from '@nestjs/common';
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
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Blogs] create - "+body.name.toString());
      return this.blogService.createBlog(body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Patch(":id")
  updateBlog(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateBlogDto): Promise<Blog> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Blogs] update - "+body.name.toString());
      return this.blogService.updateBlog(id, body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Delete(":id")
  deleteBlog(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Blogs] delete - "+id);
      return this.blogService.deleteBlog(id);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
}
