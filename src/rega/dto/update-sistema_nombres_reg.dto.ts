import { PartialType } from '@nestjs/swagger';
import { CreateSistemaNombresRegDto } from './create-sistema_nombres_reg.dto';

export class UpdateSistemaNombresRegDto extends PartialType(CreateSistemaNombresRegDto) {}
