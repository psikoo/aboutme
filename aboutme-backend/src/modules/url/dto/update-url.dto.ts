import { IsString } from "class-validator";

export class UpdateUrlDto {
  @IsString()
  readonly oldUrl: string;
  @IsString()
  readonly newUrl: string;
}