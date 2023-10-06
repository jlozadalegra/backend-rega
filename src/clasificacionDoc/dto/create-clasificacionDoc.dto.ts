import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateClasificacionDocDto {
  @ApiProperty()
  @IsString()
  key: string;

  @ApiProperty()
  @IsString()
  name: string;
}
