import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CargosService } from './cargos.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCargosDto } from './dto/create-cargos.dto';
import { UpdateCargosDto } from './dto/update-cargos.dto';
import { ParseIntPipe } from '@nestjs/common/pipes';

@ApiTags('Cargos')
@Controller('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) {}

  @Get()
  async findAll() {
    return await this.cargosService.findAll();
  }

  @Post()
  insert(@Body() body: CreateCargosDto) {
    return this.cargosService.insert(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateCargosDto) {
    return this.cargosService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.cargosService.delete(id);  
    } catch (error) {
      console.log("error", error);
    }
    
  }
}
