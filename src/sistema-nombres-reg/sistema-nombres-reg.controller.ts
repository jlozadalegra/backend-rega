import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { SistemaNombresRegService } from './sistema-nombres-reg.service';
import { CreateSistemaNombresRegDto } from './dto/create-sistema-nombres-reg.dto';
import { UpdateSistemaNombresRegDto } from './dto/update-sistema-nombres-reg.dto';

@Controller('sistema-nombres-reg')
export class SistemaNombresRegController {
  constructor(
    private readonly sistemaNombresRegService: SistemaNombresRegService,
  ) {}

  @Post()
  create(@Body() createSistemaNombresRegDto: CreateSistemaNombresRegDto) {
    return this.sistemaNombresRegService.create(createSistemaNombresRegDto);
  }

  @Get()
  findAll() {
    return this.sistemaNombresRegService.findAll();
  }

  @Get('unidad/:num')
  async findAllNumUnidad(@Res() res, @Param('num') num: string) {
    const data = await this.sistemaNombresRegService.findAllNumUnidad(num);

    if (!data.length) {
      throw new HttpException('Registro no encontrado', HttpStatus.NOT_FOUND);
    }

    return res.status(HttpStatus.OK).json({
      statuscode: HttpStatus.OK,
      message: 'OK',
      data: data,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sistemaNombresRegService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSistemaNombresRegDto: UpdateSistemaNombresRegDto,
  ) {
    return this.sistemaNombresRegService.update(
      +id,
      updateSistemaNombresRegDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sistemaNombresRegService.remove(+id);
  }
}
