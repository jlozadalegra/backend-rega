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

@Controller('sistema-reg')
export class SistemaRegController {
  constructor(private readonly sistemaRegService: SistemaRegService) {}

  @Post()
  create(@Body() createSistemaRegDto: CreateSistemaRegDto) {
    return this.sistemaRegService.create(createSistemaRegDto);
  }

  @Get()
  findAll() {    
    return this.sistemaRegService.findAll();
  }

  @Get('byunit/:id')
  findUnidad(@Param('id') id: string) {
    return this.sistemaRegService.findUnidad(id);
  }

  @Get('bycod/:cod')
  findByCod(@Param('cod') cod: number) {
    return this.sistemaRegService.findByCod(cod);
  }

  @Patch(':cod')
  update(
    @Param('cod') cod: number,
    @Body() updateSistemaRegDto: UpdateSistemaRegDto,
  ) {
    return this.sistemaRegService.update(cod, updateSistemaRegDto);
  }

  @Delete(':cod')
  remove(@Param('cod') cod: number) {
    return this.sistemaRegService.remove(cod);
  }
}
