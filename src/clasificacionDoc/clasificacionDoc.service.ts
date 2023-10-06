import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { ClasificacionDoc } from './entities/clasificacionDoc.entity';
import { CreateClasificacionDocDto, UpdateClasificacionDocDto } from './dto';

@Injectable()
export class ClasificacionDocService {
  private ClasificacionDocRepository =
    AppDataSource.getRepository(ClasificacionDoc);

  async findAll() {
    const result = await this.ClasificacionDocRepository.find({
      order: { name: 'ASC' },
    });

    if (result.length) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: result,
      };
    } else {
      throw new HttpException(
        'Sin registros que mostrar',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findOne(id: string) {
    const cargo = await this.ClasificacionDocRepository.findOne({
      where: { id },
    });

    if (cargo) {
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

  async insert(body: CreateClasificacionDocDto) {
    let cargo = {};

    try {
      cargo = this.ClasificacionDocRepository.create(body);
      await this.ClasificacionDocRepository.save(cargo);
    } catch (error) {
      return error;
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: cargo,
    };
  }

  async update(id: string, body: UpdateClasificacionDocDto) {
    const preloadCargo = {
      id,
      ...body,
    };

    const cargo = await this.ClasificacionDocRepository.preload(preloadCargo);

    if (cargo) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.ClasificacionDocRepository.save(cargo),
      };
    } else {
      throw new HttpException(
        `No se encuentra el registro con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async delete(id: string) {
    const cargo = await this.ClasificacionDocRepository.findOne({
      where: { id },
    });

    if (cargo) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.ClasificacionDocRepository.remove(cargo),
      };
    }

    throw new HttpException(
      `No se encuentra el área con id ${id}`,
      HttpStatus.NOT_FOUND,
    );

    /*
    const result = await this.ClasificacionDocRepository.delete(id);    

    if (result.affected === 0){
      throw new HttpException(
        `No se encuentra el área con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
      }
      */
  }
}
