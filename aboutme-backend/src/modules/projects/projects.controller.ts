import { Controller, Headers, Get, Param, Post, Body, UnauthorizedException, Patch, Delete } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ProjectsService } from './projects.service';
import { Project } from './entities';
import { CreateProjectDto, UpdateProjectDto } from './dto';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly configService: ConfigService, private readonly projectsService: ProjectsService) {};

  @Get()
  getProjects(): Promise<Project[]> {
    return this.projectsService.getProjects();
  }
  @Get(":id")
  getProject(@Param("id") id: number): Promise<Project> {
    return this.projectsService.getProject(id);
  }
  @Post()
  createProject(@Headers('apiKey') apiKey: string, @Body() body: CreateProjectDto): Promise<Project> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Users] create - "+body.name.toString());
      return this.projectsService.createProject(body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Patch(":id")
  updateProject(@Headers('apiKey') apiKey: string, @Param("id") id: number, @Body() body: UpdateProjectDto): Promise<Project> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Users] update - "+body.name.toString());
      return this.projectsService.updateProject(id, body);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
  @Delete(":id")
  deleteProject(@Headers('apiKey') apiKey: string, @Param("id") id: number): Promise<JSON> {
    if(apiKey === this.configService.get("API_KEY")) {
      console.log("[Users] delete - "+id);
      return this.projectsService.deleteProject(id);
    } else throw new UnauthorizedException("Invalid apiKey");
  }
}
