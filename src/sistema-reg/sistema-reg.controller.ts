import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { SistemaRegService } from './sistema-reg.service';
import { CreateSistemaRegDto } from './dto/create-sistema-reg.dto';
import { UpdateSistemaRegDto } from './dto/update-sistema-reg.dto';
import { SistemaUnidadReg } from 'src/sistema-unidad-reg';
import { ParseIntPipe } from '@nestjs/common/pipes';

@Controller('sistemareg')
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

  @Get('unidad/:num')
  findAllNumUnidad(@Param('num') num: SistemaUnidadReg) {
    return this.sistemaRegService.findAllNumUnidad(num);
  }

  //Ruta para obtener el consecutivo del rega
  @Get('cons')
  consecutivo(@Query() query) {
    return this.sistemaRegService.consecutivo(
      query.NumUnidad,
      query.year,
      query.entsal,
      query.repartir,
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.sistemaRegService.findOne(id);
  }

  @Put(':id')
  editRecord(
    @Param('id', ParseIntPipe) id: number,
    @Body() update: UpdateSistemaRegDto,
  ) {
    return this.sistemaRegService.editRecord(id, update);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.sistemaRegService.remove(id);
  }
}
