import { IsString } from "class-validator";

export class CreateUrlDto {
  @IsString()
  readonly oldUrl: string;
  @IsString()
  readonly newUrl: string;
}
