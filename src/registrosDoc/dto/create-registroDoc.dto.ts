import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  isNumber,
} from 'class-validator';
import { ClasificacionDoc } from 'src/clasificacionDoc';
import { Unidades } from 'src/unidades/entities';
import { Users } from 'src/users/entities';

export class CreateRegistroDocDto {
  @IsNumber()
  conteo: number;

  @IsString()
  codigo: string;

  @IsDate()
  @Type(() => Date)
  fecha: Date;

  @IsString()
  year: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  idUnidad: Unidades;

  @IsString()
  @IsNotEmpty()
  idUsuario: Users;

  @IsString()
  @IsNotEmpty()
  idClasificacion: ClasificacionDoc;

  @IsArray()
  @IsNotEmpty()
  destino: Unidades[];

  @IsString()
  file: string;
}
