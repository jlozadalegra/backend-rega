import { DataSource } from 'typeorm';
import { SistemaNombresReg } from './sistema-nombres-reg';
import { SistemaProcDest } from './sistema-proc-dest';
import { SistemaReg } from './sistema-reg';
import { SistemaTipDocCal } from './sistema-tip-doc-cal';
import { SistemaTipSal } from './sistema-tip-sal/entities/sistema-tip-sal.entity';
import { SistemaUnidadReg } from './sistema-unidad-reg';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 33306,
  username: 'root',
  password: 'root',
  database: 'cpresup',
  synchronize: false,
  logging: true,
  entities: [
    SistemaReg, 
    SistemaNombresReg, 
    SistemaProcDest,
    SistemaTipDocCal,
    SistemaTipSal,
    SistemaUnidadReg
  ],  
  migrations: [
    'migrate/*.ts'
  ]  
});
