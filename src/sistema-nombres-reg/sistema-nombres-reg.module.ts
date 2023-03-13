import { Module } from '@nestjs/common';
import { SistemaNombresRegService } from './sistema-nombres-reg.service';
import { SistemaNombresRegController } from './sistema-nombres-reg.controller';

@Module({
  controllers: [SistemaNombresRegController],
  providers: [SistemaNombresRegService],
  exports: [SistemaNombresRegService],
})
export class SistemaNombresRegModule {}
