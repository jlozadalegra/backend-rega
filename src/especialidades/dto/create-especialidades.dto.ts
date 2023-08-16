import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEspecialidadesDto {
  @ApiProperty()
  @IsString()
  especialidades: string;
}
