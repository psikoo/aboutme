import { IsNumber, IsString } from "class-validator";
import { Camera } from "../../cameras/entities";

export class CreatePhotoDto {
  @IsString()
  url: string;
  @IsNumber()
  time: string;
  @IsNumber()
  cameraId: Camera;
}
