import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { SistemaNombresReg } from 'src/sistema-nombres-reg';
import { SistemaProcDest } from 'src/sistema-proc-dest';
import { SistemaTipDocCal } from 'src/sistema-tip-doc-cal';
import { SistemaTipSal } from 'src/sistema-tip-sal/entities/sistema-tip-sal.entity';
import { SistemaUnidadReg } from 'src/sistema-unidad-reg';
import { ENT_SAL_ENUM } from '../entities/sistema-reg.enum';

export class CreateSistemaRegDto {
  @IsString()
  @IsNotEmpty()
  Co_nombre: SistemaNombresReg;

  @IsString()
  @IsNotEmpty()
  Num_unidad_reg: SistemaUnidadReg;

  @IsEnum(ENT_SAL_ENUM)
  ent_sal: ENT_SAL_ENUM; //enum R/E y R/S

  @IsString()
  @IsNotEmpty()
  Co_tdoc: SistemaTipDocCal;

  @IsString()
  aclar_adic: string;

  @IsDate()
  @Type(() => Date)
  fecha: Date;

  @IsString()
  denomindoc: string;

  @IsString()
  @IsNotEmpty()
  Co_pdest: SistemaProcDest;

  @IsString()
  @IsNotEmpty()
  Co_tipsal: SistemaTipSal;

  @IsNumber()
  numejemp: number;

  @IsString()
  year: string;

  @IsString()
  repartir: string;
}
