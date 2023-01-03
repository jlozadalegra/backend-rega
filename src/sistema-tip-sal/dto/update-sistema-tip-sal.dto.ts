import { PartialType } from '@nestjs/swagger';
import { CreateSistemaTipSalDto } from './create-sistema-tip-sal.dto';

export class UpdateSistemaTipSalDto extends PartialType(CreateSistemaTipSalDto) {}
