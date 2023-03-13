import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { SistemaNombresRegService } from 'src/sistema-nombres-reg';
import { SistemaUnidadRegService } from 'src/sistema-unidad-reg';

import { AuthDto } from './dto';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JWTPayload } from './jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private userService: SistemaNombresRegService,
    private unitService: SistemaUnidadRegService,
    private jwtService: JwtService,
  ) {}

  async validateUser(authDto: AuthDto) {
    const user = await this.userService.findOne(authDto.usuario);
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const valid = await bcrypt.compare(authDto.password, user.data.passnreg);
    if (!valid) throw new UnauthorizedException('Contraseña incorrecta');

    const unit = await this.unitService.findOne(user.data.Num_unidad_reg);

    const token = this.generateAccessToken(
      user.data.Co_usuario,
      user.data.datosgenerales,
    );

    return {
      statusCode: HttpStatus.OK,
      message: 'Usuario Logueado',
      data: {
        idUsuario: user.data.Co_usuario,
        usuario: user.data.datosgenerales,
        admin: user.data.aut_NC[0],
        idUnidad: unit.data.Num_unidad_reg,
        unidad: unit.data.descripcionureg,
        access_token: token.access_token
      },
    }
  }

  generateAccessToken(idUsuario: string, usuario: string) {
    const payload: JWTPayload = { idUsuario: idUsuario, usuario: usuario };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
