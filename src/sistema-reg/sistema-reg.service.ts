import { Injectable } from '@nestjs/common';
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

    console.log(NumUnidad);

    const numreg = await this.consecutivo(NumUnidad, year, entsal, repartir);

    const registro = this.SistemaRegRepo.create(createSistemaRegDto);
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

  async findAllNumUnidad(num: SistemaUnidadReg): Promise<SistemaReg[]> {
    return await this.SistemaRegRepo.find({
      relations: {
        Co_nombre: true,
        Co_tdoc: true,
        Co_pdest: true,
        Co_tipsal: true,
        Num_unidad_reg: true,
      },
      where: { Num_unidad_reg: num },
    });
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

  findOne(id: number) {
    return `This action returns a #${id} sistemaReg`;
  }

  update(id: number, updateSistemaRegDto: UpdateSistemaRegDto) {
    return `This action updates a #${id} sistemaReg`;
  }

  async remove(id: number) {
    const adelete = await this.SistemaRegRepo.findOneBy({ Co_reg: id });   
    if (adelete) {
      return this.SistemaRegRepo.remove(adelete) ;
    }
    return null;     
  }
}
