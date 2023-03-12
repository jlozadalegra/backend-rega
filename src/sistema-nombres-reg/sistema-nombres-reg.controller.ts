import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SistemaNombresRegService } from './sistema-nombres-reg.service';
import { CreateSistemaNombresRegDto } from './dto/create-sistema-nombres-reg.dto';
import { UpdateSistemaNombresRegDto } from './dto/update-sistema-nombres-reg.dto';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Control de usuarios')
@Controller('users')
export class SistemaNombresRegController {
  constructor(
    private readonly sistemaNombresRegService: SistemaNombresRegService,
  ) {}

  @ApiBearerAuth()
  @Post()
  async create(@Body() createSistemaNombresRegDto: CreateSistemaNombresRegDto) {
    return await this.sistemaNombresRegService.create(
      createSistemaNombresRegDto,
    );
  }

  @Get()
  findAll() {
    return this.sistemaNombresRegService.findAll();
  }

  @Get('unit/:num')
  async findAllNumUnidad(@Param('num') num: string) {
    return await this.sistemaNombresRegService.findAllNumUnidad(num);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sistemaNombresRegService.findOne(id);
  }

  @Put(':id')
  editRecord(
    @Param('id') id: string,
    @Body() updateSistemaNombresRegDto: UpdateSistemaNombresRegDto,
  ) {
    return this.sistemaNombresRegService.editRecord(
      id,
      updateSistemaNombresRegDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sistemaNombresRegService.remove(id);
  }

  @Post('login')
  login(@Body('usuario') usuario: string, @Body('password') password: string) {
    return this.sistemaNombresRegService.login(usuario, password);
  }
}
