import { IsBoolean, IsString } from "class-validator";

export class CreatePhotoDto {
    @IsString()
    url: string;
    @IsString()
    tag: string;
    @IsBoolean()
    sfw: boolean;
    @IsString()
    name: string;
    @IsString()
    description: string;
    @IsString()
    date:string;
}