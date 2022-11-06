import { AppDataSource } from "src/data-source";
import { SistemaNombresReg } from "../entities";

export const sistemaNombresRegRepository = AppDataSource.getRepository(SistemaNombresReg);
