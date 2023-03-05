import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { CreateSistemaTipSalDto } from './dto/create-sistema-tip-sal.dto';
import { UpdateSistemaTipSalDto } from './dto/update-sistema-tip-sal.dto';
import { SistemaTipSal } from './entities/sistema-tip-sal.entity';

@Injectable()
export class SistemaTipSalService {
  private TipSalRepo = AppDataSource.getRepository(SistemaTipSal);

  async create(newrecord: CreateSistemaTipSalDto): Promise<SistemaTipSal> {
    return await this.TipSalRepo.save(newrecord);
  }

  async findAll() {
    const found = await this.TipSalRepo.find();

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
    const found = await this.TipSalRepo.findOne({
      where: { Co_tipsal: id },
    });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  async editRecord(id: string, update: UpdateSistemaTipSalDto) {
    const found = await this.TipSalRepo.findOneBy({ Co_tipsal: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    await this.TipSalRepo.update(id, update);

    const modified = await this.TipSalRepo.findOne({
      where: { Co_tipsal: id },
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
    const found = await this.TipSalRepo.findOneBy({ Co_tipsal: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: await this.TipSalRepo.remove(found),
    };
  }
}
