import { DataSource } from 'typeorm';

import 'dotenv/config';

import { Cargos } from './cargos/entities/cargos.entity';
import { Especialidades } from './especialidades/entities/especialidades.entity';
import { Areas } from './areas/entities/areas.entity';
import { Users } from './users/entities/users.entity';
import { ClasificacionDoc } from './clasificacionDoc/entities';
import { OtrasEntidades } from './otrasEntidades/entities';
import { RegistroDoc } from './registrosDoc/entities/registroDoc.entity';
import { Unidades } from './unidades/entities';
import DatabaseFile from './avatar/entities/avatar.entity';

export const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: true,
  logging: true,
  entities: [
    Cargos,
    Especialidades,
    Areas,
    Users,
    Unidades,
    ClasificacionDoc,
    OtrasEntidades,
    RegistroDoc,
    DatabaseFile,
  ],
});
