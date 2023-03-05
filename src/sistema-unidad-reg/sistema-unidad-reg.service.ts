import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { CreateSistemaUnidadRegDto } from './dto/create-sistema-unidad-reg.dto';
import { UpdateSistemaUnidadRegDto } from './dto/update-sistema-unidad-reg.dto';
import { SistemaUnidadReg } from './entities/sistema-unidad-reg.entity';

@Injectable()
export class SistemaUnidadRegService {
  private UnidadRegRepo = AppDataSource.getRepository(SistemaUnidadReg);

  async create(
    newrecord: CreateSistemaUnidadRegDto,
  ): Promise<SistemaUnidadReg> {
    return await this.UnidadRegRepo.save(newrecord);
  }

  async findAll() {
    const found = await this.UnidadRegRepo.find();
    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  //Buscar un único registro en la tabla
  async findOne(id: string) {
    const found = await this.UnidadRegRepo.findOne({
      where: { Num_unidad_reg: id },
    });

    if (found == null)
      throw new HttpException('Unidad no encontrada', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  async editRecord(id: string, update: UpdateSistemaUnidadRegDto) {
    const found = await this.UnidadRegRepo.findOneBy({ Num_unidad_reg: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    await this.UnidadRegRepo.update(id, update);

    const modified = await this.UnidadRegRepo.findOne({
      where: { Num_unidad_reg: id },
      relations: {
        sistemareg: true,
      },
    });

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: modified,
    };
  }

  async remove(id: string) {
    const found = await this.UnidadRegRepo.findOneBy({ Num_unidad_reg: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: await this.UnidadRegRepo.remove(found),
    };
  }
}
