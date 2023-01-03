import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  HttpException,
  Req,
  Query,
} from '@nestjs/common';
import { SistemaRegService } from './sistema-reg.service';
import { CreateSistemaRegDto } from './dto/create-sistema-reg.dto';
import { UpdateSistemaRegDto } from './dto/update-sistema-reg.dto';
import { query } from 'express';
import { SistemaUnidadReg } from 'src/sistema-unidad-reg';

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
  async findAllNumUnidad(@Res() res, @Param('num') num: SistemaUnidadReg) {
    const data = await this.sistemaRegService.findAllNumUnidad(num);

    if (!data.length) {
      throw new HttpException('Registro no encontrado', HttpStatus.NOT_FOUND);
    }

    return res.status(HttpStatus.OK).json({
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: data,
    });
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
  async remove(@Res() res, @Param('id') id: string) {
    const data = await this.sistemaRegService.remove(+id);
    
    if (data == null) {
      throw new HttpException('Registro no encontrado', HttpStatus.NOT_FOUND);
    }

    return res.status(HttpStatus.OK).json({
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: data,
    });
  }
}
