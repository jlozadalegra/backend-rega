import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SistemaRegService } from './sistema_reg.service';
import { CreateSistemaRegDto } from './dto/create-sistema_reg.dto';
import { UpdateSistemaRegDto } from './dto/update-sistema_reg.dto';
import { AppDataSource } from 'src/data-source';
import { Usuario } from './entities/usuario.entity copy';
import { sistema_reg } from './entities/sistema_reg.entity';

@Controller('sistema-reg')
export class SistemaRegController {
  constructor(private readonly sistemaRegService: SistemaRegService) {}

  @Post()
  create(@Body() createSistemaRegDto: CreateSistemaRegDto) {
    return this.sistemaRegService.create(createSistemaRegDto);
  }

  @Get()
  findAll() {
    return AppDataSource.manager.find(sistema_reg);
    //return this.sistemaRegService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sistemaRegService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSistemaRegDto: UpdateSistemaRegDto,
  ) {
    return this.sistemaRegService.update(+id, updateSistemaRegDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sistemaRegService.remove(+id);
  }
}
