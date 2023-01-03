import { PartialType } from '@nestjs/swagger';
import { CreateSistemaUnidadRegDto } from './create-sistema-unidad-reg.dto';

export class UpdateSistemaUnidadRegDto extends PartialType(CreateSistemaUnidadRegDto) {}
