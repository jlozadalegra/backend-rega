import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SistemaProcDestService } from './sistema-proc-dest.service';
import { CreateSistemaProcDestDto } from './dto/create-sistema-proc-dest.dto';
import { UpdateSistemaProcDestDto } from './dto/update-sistema-proc-dest.dto';

@Controller('sistemaprocdest')
export class SistemaProcDestController {
  constructor(private readonly sistemaProcDestService: SistemaProcDestService) {}

  @Post()
  create(@Body() createSistemaProcDestDto: CreateSistemaProcDestDto) {    
    return this.sistemaProcDestService.create(createSistemaProcDestDto);
  }

  @Get()
  findAll() {
    return this.sistemaProcDestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sistemaProcDestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSistemaProcDestDto: UpdateSistemaProcDestDto) {
    return this.sistemaProcDestService.update(+id, updateSistemaProcDestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sistemaProcDestService.remove(+id);
  }
}
