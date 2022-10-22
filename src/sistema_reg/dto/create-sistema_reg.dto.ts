import { Type } from "class-transformer";
import { IsEnum, IsNumber, IsString, IsDate, IsNotEmpty } from "class-validator";
import { ENT_SAL_ENUM } from "../enum/ent_sal.enum";

export class CreateSistemaRegDto { 
  @IsString()
  @IsNotEmpty()
  Co_nombre: string;

  @IsString()
  Num_unidad_reg: string;

  @IsEnum(ENT_SAL_ENUM)
  ent_sal: ENT_SAL_ENUM; //enum R/E y R/S

  @IsString()
  Co_tdoc: string;

  @IsNumber()
  num_reg: number;

  @IsString()
  aclar_adic: string;

  @IsDate()
  @Type(() => Date)
  fecha: Date;

  @IsString()
  denomindoc: string;

  @IsString()
  Co_pdest: string;

  @IsString()
  Co_tipsal: string;

  @IsNumber()
  numejemp: number;

  @IsString()
  year: string;
}
