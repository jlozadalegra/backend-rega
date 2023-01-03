import { Module } from '@nestjs/common';
import { SistemaProcDestModule } from './sistema-proc-dest/sistema-proc-dest.module';
import { SistemaRegModule } from './sistema-reg/sistema-reg.module';
import { SistemaNombresRegModule } from './sistema-nombres-reg/sistema-nombres-reg.module';
import { SistemaTipDocCalModule } from './sistema-tip-doc-cal/sistema-tip-doc-cal.module';
import { SistemaTipSalModule } from './sistema-tip-sal/sistema-tip-sal.module';
import { SistemaUnidadRegModule } from './sistema-unidad-reg/sistema-unidad-reg.module';
@Module({
  imports: [        
    SistemaProcDestModule,
    SistemaRegModule,
    SistemaNombresRegModule,
    SistemaTipDocCalModule,
    SistemaTipSalModule,
    SistemaUnidadRegModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
