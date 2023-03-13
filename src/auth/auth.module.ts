import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SistemaNombresRegModule } from 'src/sistema-nombres-reg';
import { SistemaUnidadRegModule } from 'src/sistema-unidad-reg';
import { JwtModule } from '@nestjs/jwt';
import { JwtConsts } from 'src/constants';
import { JwtStrategy } from './strategy';

@Module({
  imports: [
    SistemaNombresRegModule,
    SistemaUnidadRegModule,
    JwtModule.register({
      secret: JwtConsts.JWT_ACCESS_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
