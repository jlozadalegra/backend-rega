import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { areas } from './entities/areas.entity';
import { CreateAreasDto } from './dto/create-areas.dto';
import { UpdateAreasDto } from './dto/update-areas.dto';

@Injectable()
export class AreasService {
  private AreasRepository = AppDataSource.getRepository(areas);

  async findAll() {
    const area = await this.AreasRepository.find({ order: { areas: 'ASC' } });

    if (area.length) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: area,
      };
    } else {
      throw new HttpException(
        'Sin registros que mostrar',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async insert(body: CreateAreasDto) {
    const area = this.AreasRepository.create(body);
    await this.AreasRepository.save(area);
    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: area,
    };
  }

  async update(id: string, body: UpdateAreasDto) {
    const preloadArea = {
      id,
      ...body,
    };

    const area = await this.AreasRepository.preload(preloadArea);

    if (area) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.AreasRepository.save(area),
      };
    } else {
      throw new HttpException(
        `No se encuentra el área con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async delete(id: string) {
    const area = await this.AreasRepository.findOne({ where: { id } });

    if (area) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.AreasRepository.remove(area),
      };
    }

    throw new HttpException(
      `No se encuentra el área con id ${id}`,
      HttpStatus.NOT_FOUND,
    );

    /*
    const result = await this.AreasRepository.delete(id);    

    if (result.affected === 0){
      throw new HttpException(
        `No se encuentra el área con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
      }
      */
  }
}
