import { Injectable } from '@nestjs/common';
import { CreateSistemaTipSalDto } from './dto/create-sistema-tip-sal.dto';
import { UpdateSistemaTipSalDto } from './dto/update-sistema-tip-sal.dto';

@Injectable()
export class SistemaTipSalService {
  create(createSistemaTipSalDto: CreateSistemaTipSalDto) {
    return 'This action adds a new sistemaTipSal';
  }

  findAll() {
    return `This action returns all sistemaTipSal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sistemaTipSal`;
  }

  update(id: number, updateSistemaTipSalDto: UpdateSistemaTipSalDto) {
    return `This action updates a #${id} sistemaTipSal`;
  }

  remove(id: number) {
    return `This action removes a #${id} sistemaTipSal`;
  }
}
