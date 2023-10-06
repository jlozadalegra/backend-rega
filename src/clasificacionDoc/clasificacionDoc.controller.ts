import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClasificacionDocService } from './clasificacionDoc.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateClasificacionDocDto } from './dto/create-clasificacionDoc.dto';
import { UpdateClasificacionDocDto } from './dto/update-clasificacionDoc.dto';

@ApiTags('Clasificación de Documentos')
@Controller('classification')
export class ClasificacionDocController {
  constructor(private readonly clasificaciondocService: ClasificacionDocService) {}

  @Get()
  async findAll() {
    return await this.clasificaciondocService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.clasificaciondocService.findOne(id);
  }

  @Post()
  insert(@Body() body: CreateClasificacionDocDto) {
    try {
      return this.clasificaciondocService.insert(body);
    } catch (error) {
      return error;
      console.log('Error desde el API', error);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateClasificacionDocDto) {
    return this.clasificaciondocService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    try {
      return this.clasificaciondocService.delete(id);
    } catch (error) {
      console.log('error', error);
    }
  }
}
