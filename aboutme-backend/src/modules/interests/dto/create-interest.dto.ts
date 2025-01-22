import { IsBoolean, IsString } from "class-validator";

export class CreateInterestDto {
  @IsString()
  name: string;
  @IsString()
  tag: string;
  @IsBoolean()
  sfw: boolean;
  @IsString()
  text: string;
}