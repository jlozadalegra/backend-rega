import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { CreateSistemaNombresRegDto } from './dto/create-sistema-nombres-reg.dto';
import { UpdateSistemaNombresRegDto } from './dto/update-sistema-nombres-reg.dto';
import { SistemaNombresReg } from './entities/sistema-nombres-reg.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SistemaNombresRegService {
  private NombresRegRepo = AppDataSource.getRepository(SistemaNombresReg);

  //Obtener todos los usuarios----------------------------------------
  async findAll() {
    const found = await this.NombresRegRepo.find();

    if (!found.length) {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  //Obtener Todos los usuarios de una unidad----------------------------------
  async findAllNumUnidad(num: string) {
    console.log('esto es una prueba', num);
    const found = await this.NombresRegRepo.find({
      relations: {
        Num_unidad_reg: true,
      },
      where: { 
        Num_unidad_reg: {id: num as any}
      },
      order: {
        datosgenerales: 'ASC',
      },
    });

    if (!found.length) {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  //Insertar reistros----------------------------------------------------------------------
  async create(
    newrecord: CreateSistemaNombresRegDto,
  ): Promise<SistemaNombresReg | any> {
    if (newrecord.passnreg) {
      const saltOrRounds = 12;
      newrecord.passnreg = await bcrypt.hash(newrecord.passnreg, saltOrRounds);
    }

    const result = await this.NombresRegRepo.save(newrecord);

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: result,
    };
  }

  //Buscar un único registro en la tabla---------------------------------------------------
  async findOne(id: number) {
    const user = await this.NombresRegRepo.findOne({
      where: { id: id },
      relations: {
        Num_unidad_reg: true,
      },
    });

    if (user == null) throw new NotFoundException('Usuario no encontrado');

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: user,
    };
  }

  //Actualizar registros-------------------------------------------------------------------
  async editRecord(id: number, update: UpdateSistemaNombresRegDto) {
    const found = await this.NombresRegRepo.findOneBy({ id: id });

    if (found == null)
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);

    if (update.passnreg) {
      const saltOrRounds = 12;
      update.passnreg = await bcrypt.hash(update.passnreg, saltOrRounds);
    }

    await this.NombresRegRepo.update(id, update);

    const modified = await this.NombresRegRepo.findOne({
      where: { id: id },
    });

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: modified,
    };
  }

  //Eliminar registros--------------------------------------------------------------------
  async remove(id: number) {
    const found = await this.NombresRegRepo.findOneBy({ id: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: await this.NombresRegRepo.remove(found),
    };
  }
}
