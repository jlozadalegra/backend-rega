import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { RegistroDoc } from './entities/registroDoc.entity';
import { CreateRegistroDocDto, UpdateRegistroDocDto } from './dto';
import { Unidades } from 'src/unidades/entities';
import { ClasificacionDoc } from 'src/clasificacionDoc/entities';
import { In } from 'typeorm';
import { Users } from 'src/users/entities';

@Injectable()
export class RegistroDocService {
  private RegistroDocRepo = AppDataSource.getRepository(RegistroDoc);
  private UsuariosRepo = AppDataSource.getRepository(Users);
  private UnidadesRepo = AppDataSource.getRepository(Unidades);
  private ClasificacionDocRepo = AppDataSource.getRepository(ClasificacionDoc);

  //Obtener todos los registros------------------------------------------------------------
  async findAll() {
    const result = await this.RegistroDocRepo.find({
      relations: {
        idUnidad: true,
        idUsuario: true,
        idClasificacion: true,
        destino: true,
      },
      order: {
        conteo: 'DESC',
      },
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

  //Obtener todos los registros de una unidad----------------------------------------------
  async findAllNumUnidad(key: string) {
    const result = await this.RegistroDocRepo.find({
      relations: {
        idUnidad: true,
        idUsuario: true,
        idClasificacion: true,
        destino: true,
      },
      where: { idUnidad: { key: key as any } },
      order: {
        codigo: 'DESC',
      },
    });

    if (result) {
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

  //Buscar un único registro en la tabla por el campo Co_reg-------------------------------
  async findOne(id: string) {
    const result = await this.RegistroDocRepo.findOne({
      where: { id },
      relations: {
        idUnidad: true,
        idUsuario: true,
        idClasificacion: true,
        destino: true,
      },
    });

    if (result) {
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

  //Función para Obtener el consecutivo del REGA--------------------------------------------
  async consecutivo(unidad: Unidades, year: string) {
    const maxi = await this.RegistroDocRepo.createQueryBuilder('reg')
      .select('MAX(reg.conteo)', 'max')
      .where('reg.idUnidad = :unidad', { unidad })
      .andWhere('reg.year = :year', { year })
      .getRawOne();

    return maxi.max + 1;
  } //Fin

  //Insertar registros---------------------------------------------------------------------
  async insert(body: CreateRegistroDocDto) {
    let result = {};
    console.log(body);
    try {
      const newregistro = new RegistroDoc();
      newregistro.conteo = body.conteo;
      newregistro.codigo = body.codigo;
      newregistro.fecha = body.fecha;
      newregistro.year = body.year;
      newregistro.descripcion = body.descripcion;
      newregistro.file = body.file;

      const unidad = await this.UnidadesRepo.findOne({
        where: { id: String(body.idUnidad) },
      });
      newregistro.idUnidad = unidad;

      const usuario = await this.UsuariosRepo.findOne({
        where: { id: String(body.idUsuario) },
      });
      newregistro.idUsuario = usuario;

      const clasif = await this.ClasificacionDocRepo.findOne({
        where: { id: String(body.idClasificacion) },
      });
      newregistro.idClasificacion = clasif;

      const dest = await this.UnidadesRepo.findBy({ id: In(body.destino) });
      newregistro.destino = dest;

      console.log(newregistro);
      //clasif.id = String(body.idClasificacion)
      //newregistro.idUnidad = body.idUnidad;

      result = this.RegistroDocRepo.create(newregistro);
      await this.RegistroDocRepo.save(result);
    } catch (error) {
      return error;
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: result,
    };
  }

  //Actualizar registros-------------------------------------------------------------------
  async update(id: string, body: UpdateRegistroDocDto) {
    const preloadBody = {
      id,
      ...body,
    };

    const result = await this.RegistroDocRepo.preload(preloadBody);

    if (result) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.RegistroDocRepo.save(result),
      };
    } else {
      throw new HttpException(
        `No se encuentra el registro con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  //Eliminar registros--------------------------------------------------------------------
  async remove(id: string) {
    const result = await this.RegistroDocRepo.findOne({ where: { id } });

    if (result) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.RegistroDocRepo.remove(result),
      };
    }

    throw new HttpException(
      `No se encuentra el área con id ${id}`,
      HttpStatus.NOT_FOUND,
    );
  }
}
