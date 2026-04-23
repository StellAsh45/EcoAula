import { Controller, Post, Get, Body, Query, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUsuarioDto } from '../usuarios/dto/create-usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: any) {
    const usuario = await this.authService.validarUsuario(body.correo, body.contrasena);
    if (!usuario) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }
    return this.authService.login(usuario);
  }

  @Post('register')
  async register(@Body() dto: CreateUsuarioDto) {
    return this.authService.registro(dto);
  }

  @Get('activar')
  async activar(@Query('token') token: string) {
    return this.authService.activarCuenta(token);
  }
}
