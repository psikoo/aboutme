import { IsBoolean, IsDate, IsNumber, IsString } from "class-validator";

export class UpdateBlogDto {
    @IsString()
    name: string;
    @IsString()
    tag: string;
    @IsBoolean()
    sfw: boolean;
    @IsString()
    description: string;
    @IsDate() // TODO check if this is right maybe change to string
    date: Date;
}