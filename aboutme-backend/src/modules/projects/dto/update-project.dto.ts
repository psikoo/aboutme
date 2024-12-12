import { Body } from "@nestjs/common";
import { IsBoolean, IsDate, IsString } from "class-validator";

export class UpdateProjectDto {
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
    @IsDate()
    date: Date;
}