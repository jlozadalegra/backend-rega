import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
//import { CreateSistemaNombresRegDto } from './dto/create-sistema_nombres_reg.dto';
//import { UpdateSistemaNombresRegDto } from './dto/update-sistema_nombres_reg.dto';
import { sistemaNombresRegRepository } from '../repositories';
import { SistemaNombresReg } from '../entities';

@Injectable()
export class SistemaProDestService {
  //Mostrar todos los regisros de la Tabla
  async findAll(): Promise<SistemaNombresReg[]> {
    try {
      return await sistemaNombresRegRepository.find({
        relations: {Co_usuario: true},
      });

      //return await sistemaNombresRegRepository.createQueryBuilder("snr")
      //.leftJoinAndSelect("snr.Co_usuario", "Sistema_reg")
      //.getMany();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  
  async findUnidad(id: string): Promise<SistemaNombresReg[]> {
    const NumUnidad = await sistemaNombresRegRepository.find({
      relations: {Co_usuario: true},
      where: { Num_unidad_reg: id },
    });

    if (!NumUnidad.length) {
      throw new HttpException('Elemento no encontrado', HttpStatus.NOT_FOUND);
    }

    return NumUnidad;
  }
  
  async findByCod(id: string): Promise<SistemaNombresReg> {
    const CodReg = await sistemaNombresRegRepository.findOne({            
      relations: ['Co_usuario'], 
      where: {identificador: id} 
    });

    if (!CodReg) {
      throw new HttpException('Elemento no encontrado', HttpStatus.NOT_FOUND);
    }

    return CodReg;
  }

  /*
  async create(createSistemaRegDto: CreateSistemaRegDto): Promise<sistema_nombres_reg> {
    const CreateSistemaReg = sistemaNombresRegRepository.create(createSistemaRegDto);
    return await sistemaNombresRegRepository.save(CreateSistemaReg);
  }

  async update(
    cod: number,
    updateSistemaRegDto: UpdateSistemaRegDto,
  ): Promise<any> {
    //try {
    const FindCodReg = await sistemaNombresRegRepository.findOneBy({ Co_reg: cod });

    if (FindCodReg) {
      return await sistemaNombresRegRepository.update(
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
    const FindCodReg = await sistemaNombresRegRepository.findOneBy({ Co_reg: cod });

    if (FindCodReg) {
      return await sistemaNombresRegRepository.remove(FindCodReg);
      //return await sistemaRegRepository.delete({Co_reg: cod});
    } else {
      throw new HttpException('Elemento no encontrado', HttpStatus.NOT_FOUND);
    }
  }
  */
}
