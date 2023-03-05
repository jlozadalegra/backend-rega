import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { CreateSistemaTipDocCalDto } from './dto/create-sistema-tip-doc-cal.dto';
import { UpdateSistemaTipDocCalDto } from './dto/update-sistema-tip-doc-cal.dto';
import { SistemaTipDocCal } from './entities/sistema-tip-doc-cal.entity';

@Injectable()
export class SistemaTipDocCalService {
  private TipDocCalRepo = AppDataSource.getRepository(SistemaTipDocCal);

  async create(
    newrecord: CreateSistemaTipDocCalDto,
  ): Promise<SistemaTipDocCal> {
    return await this.TipDocCalRepo.save(newrecord);
  }

  async findAll() {
    const found = await this.TipDocCalRepo.find();

    if (!found.length) {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  //Buscar un único registro en la tabla
  async findOne(id: string) {
    const found = await this.TipDocCalRepo.findOne({
      where: { Co_docu: id },
    });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  async editRecord(id: string, update: UpdateSistemaTipDocCalDto) {
    const found = await this.TipDocCalRepo.findOneBy({ Co_docu: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    await this.TipDocCalRepo.update(id, update);

    const modified = await this.TipDocCalRepo.findOne({
      where: { Co_docu: id },
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
    const found = await this.TipDocCalRepo.findOneBy({ Co_docu: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: await this.TipDocCalRepo.remove(found),
    };
  }
}
