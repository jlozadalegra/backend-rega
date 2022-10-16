import { Injectable } from '@nestjs/common';
import { CreateSistemaRegDto } from './dto/create-sistema_reg.dto';
import { UpdateSistemaRegDto } from './dto/update-sistema_reg.dto';

@Injectable()
export class SistemaRegService {
  create(createSistemaRegDto: CreateSistemaRegDto) {
    return 'This action adds a new sistemaReg';
  }

  findAll() {
    return `This action returns all sistemaReg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sistemaReg`;
  }

  update(id: number, updateSistemaRegDto: UpdateSistemaRegDto) {
    return `This action updates a #${id} sistemaReg`;
  }

  remove(id: number) {
    return `This action removes a #${id} sistemaReg`;
  }
}
