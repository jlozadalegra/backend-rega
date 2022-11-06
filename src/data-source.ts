import { DataSource } from 'typeorm';
import { SistemaNombresReg } from './rega/entities';
import { sistema_reg } from './rega/entities';
import { SistemaProDest } from './rega/entities';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 33306,
  username: 'root',
  password: 'root',
  database: 'cpresup',
  synchronize: true,
  logging: true,
  entities: [sistema_reg, SistemaNombresReg, SistemaProDest],
  subscribers: [],
  migrations: [],
});
