import { Module } from '@nestjs/common';
import { SistemaUnidadRegService } from './sistema-unidad-reg.service';
import { SistemaUnidadRegController } from './sistema-unidad-reg.controller';

@Module({
  controllers: [SistemaUnidadRegController],
  providers: [SistemaUnidadRegService]
})
export class SistemaUnidadRegModule {}
