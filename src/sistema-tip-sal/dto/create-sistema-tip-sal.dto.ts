import { isString, IsString } from 'class-validator';

export class CreateSistemaTipSalDto {
  @IsString()
  Desc_tipsal: string;
}
