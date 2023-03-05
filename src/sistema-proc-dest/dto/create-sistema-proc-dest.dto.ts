import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { DEL_SIT } from '../entities/sistema-proc-dest.enum';

export class CreateSistemaProcDestDto {
  @IsString({ message: 'Debe escribir un Texto como código' })
  @IsNotEmpty({
    message: 'El campo Código ProcDest no puede estar vacio',
  })
  Co_pdest: string;

  @IsString()
  descripcionpdest: string;

  @IsEnum(DEL_SIT)
  del_sit: DEL_SIT;
}
