import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities';
import { Repository } from 'typeorm';
import { CreateProjectDto, UpdateProjectDto } from './dto';

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private readonly userRepository: Repository<Project>) {}

  async getProjects(): Promise<Project[]> {
    return await this.userRepository.find();
  }
  async getProject(id: number): Promise<Project> {
    const user: Project = await this.userRepository.findOneBy({id});
    if(!user) throw new NotFoundException();
    else return user;
  }
  async createProject(body: CreateProjectDto): Promise<Project> {
    const user: Project = await this.userRepository.create({
      url: body.url,
      tag: body.tag,
      sfw: body.sfw,
      name: body.name,
      description: body.description,
      date: body.date
    })
    return this.userRepository.save(user);
  }
  async updateProject(id: number, body: UpdateProjectDto): Promise<Project> {
    const user: Project = await this.userRepository.preload({
      id,
      url: body.url,
      tag: body.tag,
      sfw: body.sfw,
      name: body.name,
      description: body.description,
      date: body.date
    })
    if(!user) throw new NotFoundException("Resource not found");
    else this.userRepository.save(user);
    return user;
  }
  async deleteProject(id: number): Promise<JSON> {
    const user: Project = await this.userRepository.findOneBy({id});
    if(!user) throw new NotFoundException("Resource not found");
    else {
      this.userRepository.remove(user);
      return JSON.parse(`{"deletedId": "${id}"}`);
    }
  }
}
