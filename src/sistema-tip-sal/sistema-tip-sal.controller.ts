import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SistemaTipSalService } from './sistema-tip-sal.service';
import { CreateSistemaTipSalDto } from './dto/create-sistema-tip-sal.dto';
import { UpdateSistemaTipSalDto } from './dto/update-sistema-tip-sal.dto';

@Controller('sistema-tip-sal')
export class SistemaTipSalController {
  constructor(private readonly sistemaTipSalService: SistemaTipSalService) {}

  @Post()
  create(@Body() createSistemaTipSalDto: CreateSistemaTipSalDto) {
    return this.sistemaTipSalService.create(createSistemaTipSalDto);
  }

  @Get()
  findAll() {
    return this.sistemaTipSalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sistemaTipSalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSistemaTipSalDto: UpdateSistemaTipSalDto) {
    return this.sistemaTipSalService.update(+id, updateSistemaTipSalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sistemaTipSalService.remove(+id);
  }
}
