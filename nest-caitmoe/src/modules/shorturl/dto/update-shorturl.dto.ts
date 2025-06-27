import { IsString } from "class-validator";

export class UpdateShortUrlDto {
  @IsString()
  readonly oldUrl: string;
  @IsString()
  readonly newUrl: string;
}