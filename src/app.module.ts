import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';
import { AreasModule } from './areas';
import { CargosModule } from './cargos';
import { EspecialidadesModule } from './especialidades';
import { UnidadesModule } from './unidades';
import { UsersModule } from './users/users.module';
import { ClasificacionDoc } from './clasificacionDoc';
import { OtrasEntidadesModule } from './otrasEntidades';
import { AuthModule } from './auth/auth.module';
import { registroDocModule } from './registrosDoc';
import { AvatarModule } from './avatar';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    UnidadesModule,
    AreasModule,
    CargosModule,
    EspecialidadesModule,
    ClasificacionDoc,
    OtrasEntidadesModule,
    registroDocModule,
    AvatarModule,
    UploadModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
