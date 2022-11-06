import { Module } from '@nestjs/common';
//import { TypeOrmModule } from '@nestjs/typeorm';
import { SistemaNombresRegModule } from './rega/modules';
import { SistemaRegModule } from './rega/modules';

@Module({
  imports: [
    /*TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 33306,
      username: 'root',
      password: 'root',
      database: 'cpresup',
      entities: [__dirname + "/entity/*{.js,.ts}"],
      synchronize: true,
    }),*/
    SistemaRegModule,
    SistemaNombresRegModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
