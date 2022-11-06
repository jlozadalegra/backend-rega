import { Module } from '@nestjs/common';
import { SistemaRegService } from '../services/sistema_reg.service';
import { SistemaRegController } from '../controllers/sistema_reg.controller';

@Module({
  controllers: [SistemaRegController],
  providers: [SistemaRegService]
})
export class SistemaRegModule {}
