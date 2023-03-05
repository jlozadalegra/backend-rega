import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { CreateSistemaNombresRegDto } from './dto/create-sistema-nombres-reg.dto';
import { UpdateSistemaNombresRegDto } from './dto/update-sistema-nombres-reg.dto';
import { SistemaNombresReg } from './entities/sistema-nombres-reg.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SistemaNombresRegService {
  private NombresRegRepo = AppDataSource.getRepository(SistemaNombresReg);

  async create(
    newrecord: CreateSistemaNombresRegDto,
  ): Promise<SistemaNombresReg> {
    return await this.NombresRegRepo.save(newrecord);
  }

  async findAll() {
    const found = await this.NombresRegRepo.find();

    if (!found.length) {
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  async findAllNumUnidad(num: string) {
    const found = await this.NombresRegRepo.find({
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

  //Buscar un único registro en la tabla
  async findOne(id: string) {
    const found = await this.NombresRegRepo.findOne({
      where: { Co_usuario: id },
    });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: found,
    };
  }

  async editRecord(id: string, update: UpdateSistemaNombresRegDto) {
    const found = await this.NombresRegRepo.findOneBy({ Co_usuario: id });

    if (found == null)
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);

    if (update.passnreg) {
      const saltOrRounds = 12;
      update.passnreg = await bcrypt.hash(update.passnreg, saltOrRounds);
    }

    await this.NombresRegRepo.update(id, update);

    const modified = await this.NombresRegRepo.findOne({
      where: { Co_usuario: id },
    });

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: modified,
    };
  }

  async remove(id: string) {
    const found = await this.NombresRegRepo.findOneBy({ Co_usuario: id });

    if (found == null)
      throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);

    return {
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: await this.NombresRegRepo.remove(found),
    };
  }

  async login(nombre: string, password: string) {
    const usuario = await this.NombresRegRepo.findOne({
      where: { Co_usuario: nombre },
    });

    if (!usuario) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const passwordcomp = await bcrypt.compare(password, usuario.passnreg);

    if (!passwordcomp) {
      throw new HttpException(
        'Contraseña incorrecta',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: usuario,
    };
  }
}
