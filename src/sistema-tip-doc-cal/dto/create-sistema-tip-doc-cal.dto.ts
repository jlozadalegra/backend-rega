import { IsString } from 'class-validator';

export class CreateSistemaTipDocCalDto {
  @IsString()
  Desc_docu: string;
}
