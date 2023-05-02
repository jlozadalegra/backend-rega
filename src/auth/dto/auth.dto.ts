import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNumber } from "class-validator";

export class AuthDto {
    @ApiProperty()
    @IsNumber()
    usuario: number;

    @ApiProperty()
    @IsString()
    password: string;
}
