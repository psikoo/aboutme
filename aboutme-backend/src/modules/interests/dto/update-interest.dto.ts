import { IsBoolean, IsNumber, IsString } from "class-validator";

export class UpdateInterestDto {
    @IsString()
    name: string;
    @IsString()
    tag: string;
    @IsBoolean()
    sfw: boolean;
    @IsString()
    text: string;
}