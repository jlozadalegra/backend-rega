import { Module } from '@nestjs/common';
import { SistemaNombresRegService } from '../services/sistema_nombres_reg.service';
import { SistemaNombresRegController } from '../controllers/sistema_nombres_reg.controller';

@Module({
  controllers: [SistemaNombresRegController],
  providers: [SistemaNombresRegService]
})
export class SistemaProDestModule {}
