import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { aut_NC_ENUM } from '../entities/sistema-nombres-reg.enum';

export class CreateSistemaNombresRegDto {
  @ApiProperty()
  @IsString()
  Co_usuario: string;

  @ApiProperty()
  @IsString()
  Num_unidad_reg: string;

  @ApiProperty()
  @IsString()
  identificador: string;

  @ApiProperty()
  @IsString()
  passnreg: string;

  @ApiProperty()
  @IsString()
  datosgenerales: string;

  @ApiProperty()
  @IsEnum(aut_NC_ENUM)
  aut_NC: aut_NC_ENUM; //enum SI y NO
}
