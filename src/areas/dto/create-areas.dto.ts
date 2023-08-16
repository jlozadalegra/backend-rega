import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateAreasDto {
  @ApiProperty()
  @IsString()
  areas: string;
}
