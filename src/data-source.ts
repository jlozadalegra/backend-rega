import { DataSource } from 'typeorm';
import { SistemaNombresReg } from './sistema-nombres-reg';
import { SistemaProcDest } from './sistema-proc-dest';
import { SistemaReg } from './sistema-reg';
import { SistemaTipDocCal } from './sistema-tip-doc-cal';
import { SistemaTipSal } from './sistema-tip-sal/entities/sistema-tip-sal.entity';
import { SistemaUnidadReg } from './sistema-unidad-reg';

import 'dotenv/config'; 

export const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION as any,
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  logging: true,
  entities: [
    SistemaReg,
    SistemaNombresReg,
    SistemaProcDest,
    SistemaTipDocCal,
    SistemaTipSal,
    SistemaUnidadReg,
  ]    
});
