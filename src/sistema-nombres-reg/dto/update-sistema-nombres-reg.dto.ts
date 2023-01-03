import { PartialType } from '@nestjs/swagger';
import { CreateSistemaNombresRegDto } from './create-sistema-nombres-reg.dto';

export class UpdateSistemaNombresRegDto extends PartialType(CreateSistemaNombresRegDto) {}
