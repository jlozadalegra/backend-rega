import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AppDataSource } from 'src/data-source';
import { Users } from './entities/users.entity';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import * as bcrypt from 'bcrypt';
import { AvatarService } from 'src/avatar';

@Injectable()
export class UsersService {
  constructor(private readonly avatarService: AvatarService) {}
  //constructor(
  //@InjectRepository(Users)
  //private usersRepository: Repository<User>,
  // private readonly databaseFilesService: DatabaseFilesService,
  //private queryRunner = AppDataSource.createQueryRunner(),
  //) //private connection: Connection,
  //{}
  private UsersRepository = AppDataSource.getRepository(Users);
  //private UsersRepository = this.UsersRepository;
  //private queryRunner = AppDataSource.createQueryRunner();

  async findAll() {
    const user = await this.UsersRepository.find({
      relations: {
        idunidad: true,
        idarea: true,
        idcargo: true,
        idespecialidad: true,
      },
      order: { fullname: 'ASC' },
    });

    /*{
      order: { unidad: 'ASC' },
    });*/

    if (user.length) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: user,
      };
    } else {
      throw new HttpException(
        'Sin registros que mostrar',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findOne(id: string) {
    const user = await this.UsersRepository.findOne({
      where: { id },
      relations: {
        idunidad: true,
        idarea: true,
        idcargo: true,
        idespecialidad: true,
      },
    });

    if (user) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: user,
      };
    } else {
      throw new HttpException(
        'Sin registros que mostrar',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async findByUser(value: string) {
    const result = await this.UsersRepository.findOne({
      where: { user: value },
      relations: {
        idunidad: true,
        idarea: true,
        idcargo: true,
        idespecialidad: true,
      },
    });

    if (result) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: result,
      };
    } else {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }
  }

  async insert(body: CreateUsersDto) {
    let user = {};

    if (body.password) {
      const saltOrRounds = 12;
      body.password = await bcrypt.hash(body.password, saltOrRounds);
    }

    try {
      user = this.UsersRepository.create(body);
      await this.UsersRepository.save(user);
    } catch (error) {
      return error;
      console.log('Error desde el servicio', error);
    }

    return {
      statusCode: HttpStatus.OK,
      message: 'OK',
      data: user,
    };
  }

  async update(id: string, body: UpdateUsersDto) {
    console.log(body);

    if (body.password) {
      const saltOrRounds = 12;
      body.password = await bcrypt.hash(body.password, saltOrRounds);
    }

    const preloadCargo = {
      id,
      ...body,
    };

    console.log(preloadCargo);

    const user = await this.UsersRepository.preload(preloadCargo);

    if (user) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.UsersRepository.save(user),
      };
    } else {
      throw new HttpException(
        `No se encuentra el registro con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async delete(id: string) {
    const user = await this.UsersRepository.findOne({ where: { id } });

    if (user) {
      return {
        statusCode: HttpStatus.OK,
        message: 'OK',
        data: await this.UsersRepository.remove(user),
      };
    }

    throw new HttpException(
      `No se encuentra el área con id ${id}`,
      HttpStatus.NOT_FOUND,
    );

    /*
    const result = await this.UsersRepository.delete(id);    

    if (result.affected === 0){
      throw new HttpException(
        `No se encuentra el área con id ${id}`,
        HttpStatus.NOT_FOUND,
      );
      }
      */
  }

  async addAvatar(userId: string, imageBuffer: Buffer, filename: string) {
    //const queryRunner = this.connection.createQueryRunner();
    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const user = await queryRunner.manager.findOne(Users, {
        where: { id: userId },
      });

      const currentAvatarId = user.avatarId;

      const avatar = await this.avatarService.uploadDatabaseFileWithQueryRunner(
        imageBuffer,
        filename,
        queryRunner,
      );

      await queryRunner.manager.update(Users, userId, {
        avatarId: avatar.id,
      });

      if (currentAvatarId) {
        await this.avatarService.deleteFileWithQueryRunner(
          currentAvatarId,
          queryRunner,
        );
      }

      await queryRunner.commitTransaction();

      return avatar;
    } catch {
      await queryRunner.rollbackTransaction();
      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }
  }
}
