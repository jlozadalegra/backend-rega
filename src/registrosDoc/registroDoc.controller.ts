import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

import { ParseIntPipe } from '@nestjs/common/pipes';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/auth.decorator';
import { RegistroDocService } from './registroDoc.service';
import { CreateRegistroDocDto, UpdateRegistroDocDto } from './dto';

@ApiTags('Registro de Documentos')
//@ ()
@Controller('register')
export class RegistroDocController {
  constructor(private readonly registroDocService: RegistroDocService) {}

  @Get()
  findAll() {
    return this.registroDocService.findAll();
  }

  @Get('unit/:num')
  findAllNumUnidad(@Param('num') num: string) {
    return this.registroDocService.findAllNumUnidad(num);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registroDocService.findOne(id);
  }

  @Get('/:unit/:year')
  consecutivo(@Param('unit') unit: string, @Param('year') year: string) {
    return this.registroDocService.consecutivo(unit as any, year);
  }

  //@Auth()
  @Post()
  insert(@Body() createSistemaRegDto: CreateRegistroDocDto) {
    return this.registroDocService.insert(createSistemaRegDto);
  }

  /*
  @Get('cons/:unit/:year')
  consecutivo(@Param('unit') unit: string, @Param('year') year: string) {
    console.warn('unidad', unit);
    console.warn('año', year);
    return this.registroDocService.consecutivo(unit as any, year);
  }
*/
  //@Auth()

  @Auth()
  @Put(':id')
  update(@Param('id') id: string, @Body() Body: UpdateRegistroDocDto) {
    return this.registroDocService.update(id, Body);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.registroDocService.remove(id);
  }
}
