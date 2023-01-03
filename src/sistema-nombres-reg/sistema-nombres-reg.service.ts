import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { SistemaUnidadReg } from 'src/sistema-unidad-reg';
import { CreateSistemaNombresRegDto } from './dto/create-sistema-nombres-reg.dto';
import { UpdateSistemaNombresRegDto } from './dto/update-sistema-nombres-reg.dto';
import { SistemaNombresReg } from './entities/sistema-nombres-reg.entity';

@Injectable()
export class SistemaNombresRegService {
  private SistemaNombresRegRepo =
    AppDataSource.getRepository(SistemaNombresReg);

  create(createSistemaNombresRegDto: CreateSistemaNombresRegDto) {
    return 'This action adds a new sistemaNombresReg';
  }

  findAll() {
    return this.SistemaNombresRegRepo.find();
  }

  async findAllNumUnidad(num: string): Promise<SistemaNombresReg[]> {
    return await this.SistemaNombresRegRepo.find({
      where: { Num_unidad_reg: num },
    });
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
