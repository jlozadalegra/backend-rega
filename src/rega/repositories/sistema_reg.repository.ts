import { AppDataSource } from "src/data-source";
import { sistema_reg } from "../entities/sistema_reg.entity";

export const sistemaRegRepository = AppDataSource.getRepository(sistema_reg);
