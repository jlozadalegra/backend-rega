import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { especialidades } from './entities/especialidades.entity';
import { CreateEspecialidadesDto } from './dto/create-especialidades.dto';
import { UpdateEspecialidadesDto } from './dto/update-especialidades.dto';

@Injectable()
export class EspecialidadesService {
  private EspecialidadesRepository = AppDataSource.getRepository(especialidades);

  async findAll() {
    const especialidad = await this.EspecialidadesRepository.find();

    if (especialidad.length) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: especialidad,
      };
    } else {
      throw new HttpException(
        'Sin registros que mostrar',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async insert(body: CreateEspecialidadesDto) {
    const especialidad = this.EspecialidadesRepository.create(body);
    await this.EspecialidadesRepository.save(especialidad);
    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: especialidad,
    };
  }

  async update(id: number, body: UpdateEspecialidadesDto) {
    const preloadEspecialidad = {
      id,
      ...body,
    };

    const especialidad = await this.EspecialidadesRepository.preload(preloadEspecialidad);

    if (especialidad) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.EspecialidadesRepository.save(especialidad),
      };
    } else {
      throw new HttpException(
        `No se encuentra la especialidad con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async delete(id: number) {
    const especialidad = await this.EspecialidadesRepository.findOne({ where: { id } });

    if (especialidad) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.EspecialidadesRepository.remove(especialidad),
      };
    }

    throw new HttpException(
      `No se encuentra la especialidad con id ${id}`,
      HttpStatus.NOT_FOUND,
    );

    /*
    const result = await this.EspecialidadesRepository.delete(id);    

    if (result.affected === 0){
      throw new HttpException(
        `No se encuentra el área con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
      }
      */
  }
}
