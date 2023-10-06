import { PartialType } from '@nestjs/mapped-types';
import { CreateClasificacionDocDto } from './create-clasificacionDoc.dto';

export class UpdateClasificacionDocDto extends PartialType(CreateClasificacionDocDto) {}