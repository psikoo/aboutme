import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UpdateSongDto {
    @IsString()
    url: string;
    @IsString()
    tag: string;
    @IsBoolean()
    sfw: boolean;
    @IsString()
    name: string;
}