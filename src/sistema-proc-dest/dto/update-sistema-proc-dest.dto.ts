import { PartialType } from '@nestjs/swagger';
import { CreateSistemaProcDestDto } from './create-sistema-proc-dest.dto';

export class UpdateSistemaProcDestDto extends PartialType(CreateSistemaProcDestDto) {}
