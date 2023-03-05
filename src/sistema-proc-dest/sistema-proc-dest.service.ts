import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { CreateSistemaProcDestDto } from './dto/create-sistema-proc-dest.dto';
import { UpdateSistemaProcDestDto } from './dto/update-sistema-proc-dest.dto';
import { SistemaProcDest } from './entities/sistema-proc-dest.entity';

@Injectable()
export class SistemaProcDestService {
  private ProcDestRepo = AppDataSource.getRepository(SistemaProcDest);

  async create(newrecord: CreateSistemaProcDestDto): Promise<SistemaProcDest> {
    return await this.ProcDestRepo.save(newrecord);
  }

  async findAll() {
    const found = await this.ProcDestRepo.find();

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
    const found = await this.ProcDestRepo.findOne({
      where: { Co_pdest: id },
    });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  async editRecord(id: string, update: UpdateSistemaProcDestDto) {
    const found = await this.ProcDestRepo.findOneBy({ Co_pdest: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    await this.ProcDestRepo.update(id, update);

    const modified = await this.ProcDestRepo.findOne({
      where: { Co_pdest: id },
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
    const found = await this.ProcDestRepo.findOneBy({ Co_pdest: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: await this.ProcDestRepo.remove(found),
    };
  }
}
