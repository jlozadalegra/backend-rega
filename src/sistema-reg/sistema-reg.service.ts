import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { SistemaUnidadReg } from 'src/sistema-unidad-reg';
import { CreateSistemaRegDto } from './dto/create-sistema-reg.dto';
import { UpdateSistemaRegDto } from './dto/update-sistema-reg.dto';
import { SistemaReg } from './entities/sistema-reg.entity';

@Injectable()
export class SistemaRegService {
  private SistemaRegRepo = AppDataSource.getRepository(SistemaReg);

  async create(createSistemaRegDto: CreateSistemaRegDto): Promise<SistemaReg> {
    //num_reg
    const NumUnidad = createSistemaRegDto.Num_unidad_reg;
    const year = createSistemaRegDto.year;
    const entsal = createSistemaRegDto.ent_sal;
    const repartir = createSistemaRegDto.repartir;

    const numreg = await this.consecutivo(NumUnidad, year, entsal, repartir);

    const registro = await this.SistemaRegRepo.create(createSistemaRegDto);
    registro.num_reg = numreg;

    return await this.SistemaRegRepo.save(registro);
  }

  findAll() {
    return this.SistemaRegRepo.find({
      relations: {
        Co_nombre: true,
        Co_tdoc: true,
        Co_pdest: true,
        Co_tipsal: true,
        Num_unidad_reg: true,
      },
    });
  }

  async findAllNumUnidad(num: SistemaUnidadReg) {
    const found = await this.SistemaRegRepo.find({
      relations: {
        Co_nombre: true,
        Co_tdoc: true,
        Co_pdest: true,
        Co_tipsal: true,
        Num_unidad_reg: true,
      },
      where: { Num_unidad_reg: num },
    });

    if (!found.length) {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  //Función para Obtener el consecutivo del REGA
  async consecutivo(
    NumUnidad: SistemaUnidadReg,
    year: string,
    entsal: string,
    repartir: string,
  ) {
    const maxi = await this.SistemaRegRepo.createQueryBuilder('reg')
      .select('MAX(reg.num_reg)', 'max')
      .where('reg.Num_unidad_reg = :NumUnidad', { NumUnidad })
      .andWhere('reg.year = :year', { year })
      .andWhere('reg.ent_sal = :entsal', { entsal })
      .andWhere('reg.repartir = :repartir', { repartir })
      .getRawOne();

    return maxi.max + 1;
  } //Fin

  //Buscar un único registro en la tabla por el campo Co_reg
  async findOne(id: number) {
    const found = await this.SistemaRegRepo.findOne({
      where: { Co_reg: id },
      relations: {
        Co_nombre: true,
        Co_tdoc: true,
        Co_pdest: true,
        Co_tipsal: true,
        Num_unidad_reg: true,
      },
    });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  async editRecord(id: number, update: UpdateSistemaRegDto) {
    const found = await this.SistemaRegRepo.findOneBy({ Co_reg: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    await this.SistemaRegRepo.update(id, update);

    const modified = await this.SistemaRegRepo.findOne({
      where: { Co_reg: id },
      relations: {
        Co_nombre: true,
        Co_tdoc: true,
        Co_pdest: true,
        Co_tipsal: true,
        Num_unidad_reg: true,
      },
    });

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: modified,
    };
  }

  async remove(id: number) {
    const found = await this.SistemaRegRepo.findOneBy({ Co_reg: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: await this.SistemaRegRepo.remove(found),
    };
  }
}
