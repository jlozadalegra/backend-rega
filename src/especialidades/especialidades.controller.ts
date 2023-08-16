import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EspecialidadesService } from './especialidades.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateEspecialidadesDto } from './dto/create-especialidades.dto';
import { UpdateEspecialidadesDto } from './dto/update-especialidades.dto';
import { ParseIntPipe } from '@nestjs/common/pipes';

@ApiTags('Especialidades')
@Controller('especialidades')
export class EspecialidadesController {
  constructor(private readonly especialidadesService: EspecialidadesService) {}

  @Get()
  async findAll() {
    return await this.especialidadesService.findAll();
  }

  @Post()
  insert(@Body() body: CreateEspecialidadesDto) {
    return this.especialidadesService.insert(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateEspecialidadesDto) {
    return this.especialidadesService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.especialidadesService.delete(id);  
    } catch (error) {
      console.log("error", error);
    }
    
  }
}
