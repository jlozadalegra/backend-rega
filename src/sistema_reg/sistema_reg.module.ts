import { Module } from '@nestjs/common';
import { SistemaRegService } from './sistema_reg.service';
import { SistemaRegController } from './sistema_reg.controller';

@Module({
  controllers: [SistemaRegController],
  providers: [SistemaRegService]
})
export class SistemaRegModule {}
