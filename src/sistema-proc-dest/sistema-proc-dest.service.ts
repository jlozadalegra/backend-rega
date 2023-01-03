import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { CreateSistemaProcDestDto } from './dto/create-sistema-proc-dest.dto';
import { UpdateSistemaProcDestDto } from './dto/update-sistema-proc-dest.dto';
import { SistemaProcDest } from './entities/sistema-proc-dest.entity';

@Injectable()
export class SistemaProcDestService {
private ProcDestRepo = AppDataSource.getRepository(SistemaProcDest);  


  create(createSistemaProcDestDto: CreateSistemaProcDestDto) {
    const newProcDest = this.ProcDestRepo.create(createSistemaProcDestDto);
    const nuevo = this.ProcDestRepo.save(newProcDest);

    return nuevo;
  }

  findAll() {
    return this.ProcDestRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} sistemaProcDest`;
  }

  update(id: number, updateSistemaProcDestDto: UpdateSistemaProcDestDto) {
    return `This action updates a #${id} sistemaProcDest`;
  }

  remove(id: number) {
    return `This action removes a #${id} sistemaProcDest`;
  }
}
