import { PartialType } from '@nestjs/swagger';
import { CreateSistemaRegDto } from './create-sistema_reg.dto';

export class UpdateSistemaRegDto extends PartialType(CreateSistemaRegDto) {}
