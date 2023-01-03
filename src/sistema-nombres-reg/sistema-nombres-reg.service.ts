import { Injectable } from '@nestjs/common';
import { CreateSistemaNombresRegDto } from './dto/create-sistema-nombres-reg.dto';
import { UpdateSistemaNombresRegDto } from './dto/update-sistema-nombres-reg.dto';

@Injectable()
export class SistemaNombresRegService {
  create(createSistemaNombresRegDto: CreateSistemaNombresRegDto) {
    return 'This action adds a new sistemaNombresReg';
  }

  findAll() {
    return `This action returns all sistemaNombresReg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sistemaNombresReg`;
  }

  update(id: number, updateSistemaNombresRegDto: UpdateSistemaNombresRegDto) {
    return `This action updates a #${id} sistemaNombresReg`;
  }

  remove(id: number) {
    return `This action removes a #${id} sistemaNombresReg`;
  }
}
