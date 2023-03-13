import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AuthDto {
    @ApiProperty()
    @IsString()
    usuario: string;

    @ApiProperty()
    @IsString()
    password: string;
}
