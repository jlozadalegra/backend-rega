import { Module } from '@nestjs/common';
import { ClasificacionDocController } from './clasificacionDoc.controller';
import { ClasificacionDocService } from './clasificacionDoc.service';

@Module({
  controllers: [ClasificacionDocController],
  providers: [ClasificacionDocService],
})
export class ClasificacionDoc {}
