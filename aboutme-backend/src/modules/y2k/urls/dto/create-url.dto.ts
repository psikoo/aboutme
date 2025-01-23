import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateUrlDto {
  @IsString()
  url: string;
  @IsString()
  tag: string;
  @IsBoolean()
  sfw: boolean;
  @IsString()
  name: string;
}