import { IsBoolean, IsString } from "class-validator";

export class UpdateBlogDto {
  @IsString()
  name: string;
  @IsString()
  tag: string;
  @IsBoolean()
  sfw: boolean;
  @IsString()
  description: string;
  @IsString()
  date:string;
}