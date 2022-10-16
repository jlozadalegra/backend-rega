import { DataSource } from "typeorm";
import { sistema_reg } from "./sistema_reg/entities/sistema_reg.entity";
import { Usuario } from "./sistema_reg/entities/usuario.entity copy";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 33306,
    username: "root",
    password: "root",
    database: "cpresup",
    synchronize: true,
    logging: true,
    entities: [sistema_reg],
    subscribers: [],
    migrations: [],
})