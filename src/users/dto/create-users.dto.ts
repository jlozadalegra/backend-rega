import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { RolesENUM } from '../enum/users.enum';
import { Areas } from 'src/areas';
import { Cargos } from 'src/cargos';
import { Especialidades } from 'src/especialidades';
import { Unidades } from 'src/unidades/entities';

export class CreateUsersDto {
  @ApiProperty()
  @IsString()
  user: string;

  @ApiProperty()
  @IsString()
  fullname: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsString()
  dni: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsEnum(RolesENUM)
  roles: RolesENUM; //enum SI y NO

  @ApiProperty()
  @IsString()
  idarea: Areas;

  @ApiProperty()
  @IsString()
  idcargo: Cargos;

  @ApiProperty()
  @IsString()
  idespecialidad: Especialidades;

  @ApiProperty()
  @IsString()
  idunidad: Unidades;
}
