import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SistemaNombresRegService } from '../services/sistema_nombres_reg.service';
//import { CreateSistemaNombresRegDto } from './dto/create-sistema_nombres_reg.dto';
//import { UpdateSistemaNombresRegDto } from './dto/update-sistema_nombres_reg.dto';

@Controller('sistemaprodest')
export class SistemaProDestController {
  constructor(private readonly sistemaNombresRegService: SistemaNombresRegService) {}

  @Get()
  findAll() {    
    return this.sistemaNombresRegService.findAll();
  }

  
  @Get('byunit/:id')
  findUnidad(@Param('id') id: string) {
    return this.sistemaNombresRegService.findUnidad(id);
  }

  
  @Get('byid/:id')
  findByCod(@Param('id') id: string) {
    return this.sistemaNombresRegService.findByCod(id);
  }

  /*
  @Post()
  create(@Body() createSistemaNombresRegDto: CreateSistemaNombresRegDto) {
    return this.sistemaNombresRegService.create(createSistemaNombresRegDto);
  }

  @Patch(':cod')
  update(
    @Param('cod') cod: number,
    @Body() updateSistemaRegDto: UpdateSistemaRegDto,
  ) {
    return this.sistemaNombresRegService.update(cod, updateSistemaRegDto);
  }

  @Delete(':cod')
  remove(@Param('cod') cod: number) {
    return this.sistemaNombresRegService.remove(cod);
  }
  */
}
