import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateSistemaRegDto } from '../dto/create-sistema_reg.dto';
import { UpdateSistemaRegDto } from '../dto/update-sistema_reg.dto';
import { sistemaRegRepository } from '../repositories/sistema_reg.repository';
import { sistema_reg } from '../entities/sistema_reg.entity';

@Injectable()
export class SistemaRegService {
  async create(createSistemaRegDto: CreateSistemaRegDto): Promise<sistema_reg> {
    const CreateSistemaReg = sistemaRegRepository.create(createSistemaRegDto);
    return await sistemaRegRepository.save(CreateSistemaReg);
  }

  async findAll(): Promise<sistema_reg[]> {
    try {
      return await sistemaRegRepository.find({
        relations: {
          Co_nombre: true,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findUnidad(id: string): Promise<sistema_reg[]> {
    const NumUnidad = await sistemaRegRepository.find({
      relations: {
        Co_nombre: true,
      },
      where: { Num_unidad_reg: id },
    });

    if (!NumUnidad.length) {
      throw new HttpException('Elemento no encontrado', HttpStatus.NOT_FOUND);
    }

    return NumUnidad;
  }

  async findByCod(cod: number): Promise<sistema_reg> {
    const CodReg = await sistemaRegRepository.findOneBy({ Co_reg: cod });

    if (!CodReg) {
      throw new HttpException('Elemento no encontrado', HttpStatus.NOT_FOUND);
    }

    return CodReg;
  }

  async update(
    cod: number,
    updateSistemaRegDto: UpdateSistemaRegDto,
  ): Promise<any> {
    //try {
    const FindCodReg = await sistemaRegRepository.findOneBy({ Co_reg: cod });

    if (FindCodReg) {
      return await sistemaRegRepository.update(
        { Co_reg: cod },
        updateSistemaRegDto,
      );
    } else {
      throw new HttpException('Elemento no encontrado', HttpStatus.NOT_FOUND);
    }
    //} catch (error) {
    //  throw new InternalServerErrorException(error.message);
    //}
  }

  async remove(cod: number): Promise<any> {
    const FindCodReg = await sistemaRegRepository.findOneBy({ Co_reg: cod });

    if (FindCodReg) {
      return await sistemaRegRepository.remove(FindCodReg);
      //return await sistemaRegRepository.delete({Co_reg: cod});
    } else {
      throw new HttpException('Elemento no encontrado', HttpStatus.NOT_FOUND);
    }
  }
}
