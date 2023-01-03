import { Injectable } from '@nestjs/common';
import { CreateSistemaUnidadRegDto } from './dto/create-sistema-unidad-reg.dto';
import { UpdateSistemaUnidadRegDto } from './dto/update-sistema-unidad-reg.dto';

@Injectable()
export class SistemaUnidadRegService {
  create(createSistemaUnidadRegDto: CreateSistemaUnidadRegDto) {
    return 'This action adds a new sistemaUnidadReg';
  }

  findAll() {
    return `This action returns all sistemaUnidadReg`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sistemaUnidadReg`;
  }

  update(id: number, updateSistemaUnidadRegDto: UpdateSistemaUnidadRegDto) {
    return `This action updates a #${id} sistemaUnidadReg`;
  }

  remove(id: number) {
    return `This action removes a #${id} sistemaUnidadReg`;
  }
}
