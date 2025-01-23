import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UpdateUrlDto {
  @IsString()
  url: string;
  @IsString()
  tag: string;
  @IsBoolean()
  sfw: boolean;
  @IsString()
  name: string;
}