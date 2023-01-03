import { Injectable } from '@nestjs/common';
import { CreateSistemaTipDocCalDto } from './dto/create-sistema-tip-doc-cal.dto';
import { UpdateSistemaTipDocCalDto } from './dto/update-sistema-tip-doc-cal.dto';

@Injectable()
export class SistemaTipDocCalService {
  create(createSistemaTipDocCalDto: CreateSistemaTipDocCalDto) {
    return 'This action adds a new sistemaTipDocCal';
  }

  findAll() {
    return `This action returns all sistemaTipDocCal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sistemaTipDocCal`;
  }

  update(id: number, updateSistemaTipDocCalDto: UpdateSistemaTipDocCalDto) {
    return `This action updates a #${id} sistemaTipDocCal`;
  }

  remove(id: number) {
    return `This action removes a #${id} sistemaTipDocCal`;
  }
}
