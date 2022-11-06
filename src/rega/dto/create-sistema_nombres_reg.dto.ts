import { IsEnum, IsString, IsNotEmpty } from "class-validator";
import { aut_NC_ENUM } from "../enum/sistema_nombres_reg.enum";

export class CreateSistemaNombresRegDto {   
  @IsString()
  @IsNotEmpty()
  Co_usuario: string;

  @IsString()
  Num_unidad_reg: string;

  @IsString()
  identificador: string;

  @IsString()
  passnreg: string;

  @IsString()
  datosgenerales: string;  

  @IsEnum(aut_NC_ENUM)
  aut_NC: aut_NC_ENUM; //enum SI y NO
}
