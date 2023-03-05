import { IsString } from 'class-validator';

export class CreateSistemaUnidadRegDto {
  @IsString()
  Num_unidad_reg: string;

  @IsString()
  descripcionureg: string;

  @IsString()
  encab_rega: string;

  @IsString()
  Ubic_docu: string;
}
