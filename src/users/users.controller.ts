import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Usuarios')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(id);
  }

  @Get('user/:value')
  async findByUser(@Param('value') value: string) {
    return await this.usersService.findByUser(value);
  }

  @Post()
  insert(@Body() body: CreateUsersDto) {
    try {
      return this.usersService.insert(body);
    } catch (error) {
      return error;
      console.log('Error desde el API', error);
    }
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateUsersDto) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    try {
      return this.usersService.delete(id);
    } catch (error) {
      console.log('error', error);
    }
  }

  @Post('avatar/:id')
  @UseInterceptors(FileInterceptor('file'))
  async addAvatar(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.usersService.addAvatar(id, file.buffer, file.originalname);
  }
}
