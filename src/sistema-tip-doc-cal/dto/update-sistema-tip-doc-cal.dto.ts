import { PartialType } from '@nestjs/swagger';
import { CreateSistemaTipDocCalDto } from './create-sistema-tip-doc-cal.dto';

export class UpdateSistemaTipDocCalDto extends PartialType(CreateSistemaTipDocCalDto) {}
