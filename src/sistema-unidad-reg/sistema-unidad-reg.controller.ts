import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SistemaUnidadRegService } from './sistema-unidad-reg.service';
import { CreateSistemaUnidadRegDto } from './dto/create-sistema-unidad-reg.dto';
import { UpdateSistemaUnidadRegDto } from './dto/update-sistema-unidad-reg.dto';

@Controller('sistema-unidad-reg')
export class SistemaUnidadRegController {
  constructor(private readonly sistemaUnidadRegService: SistemaUnidadRegService) {}

  @Post()
  create(@Body() createSistemaUnidadRegDto: CreateSistemaUnidadRegDto) {
    return this.sistemaUnidadRegService.create(createSistemaUnidadRegDto);
  }

  @Get()
  findAll() {
    return this.sistemaUnidadRegService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sistemaUnidadRegService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSistemaUnidadRegDto: UpdateSistemaUnidadRegDto) {
    return this.sistemaUnidadRegService.update(+id, updateSistemaUnidadRegDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sistemaUnidadRegService.remove(+id);
  }
}
