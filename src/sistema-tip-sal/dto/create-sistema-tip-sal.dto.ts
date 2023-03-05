import { isString, IsString } from 'class-validator';

export class CreateSistemaTipSalDto {
  @IsString()
  Co_tipsal: string;

  @IsString()
  Desc_tipsal: string;
}
