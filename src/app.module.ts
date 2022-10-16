import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SistemaRegModule } from './sistema_reg/sistema_reg.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
