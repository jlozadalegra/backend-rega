import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { cargos } from './entities/cargos.entity';
import { CreateCargosDto } from './dto/create-cargos.dto';
import { UpdateCargosDto } from './dto/update-cargos.dto';

@Injectable()
export class CargosService {
  private CargosRepository = AppDataSource.getRepository(cargos);

  async findAll() {
    const cargo = await this.CargosRepository.find();

    if (cargo.length) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: cargo,
      };
    } else {
      throw new HttpException(
        'Sin registros que mostrar',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async insert(body: CreateCargosDto) {
    const cargo = this.CargosRepository.create(body);
    await this.CargosRepository.save(cargo);
    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: cargo,
    };
  }

  async update(id: number, body: UpdateCargosDto) {
    const preloadCargo = {
      id,
      ...body,
    };

    const cargo = await this.CargosRepository.preload(preloadCargo);

    if (cargo) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.CargosRepository.save(cargo),
      };
    } else {
      throw new HttpException(
        `No se encuentra el cargo con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async delete(id: number) {
    const cargo = await this.CargosRepository.findOne({ where: { id } });

    if (cargo) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.CargosRepository.remove(cargo),
      };
    }

    throw new HttpException(
      `No se encuentra el cargo con id ${id}`,
      HttpStatus.NOT_FOUND,
    );

    /*
    const result = await this.CargosRepository.delete(id);    

    if (result.affected === 0){
      throw new HttpException(
        `No se encuentra el área con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
      }
      */
  }
}
