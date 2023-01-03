import { PartialType } from '@nestjs/swagger';
import { CreateSistemaRegDto } from './create-sistema-reg.dto';

export class UpdateSistemaRegDto extends PartialType(CreateSistemaRegDto) {}
