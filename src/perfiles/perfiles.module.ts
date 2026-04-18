import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PerfilesController } from './perfiles.controller';
import { PerfilesService } from './perfiles.service';
import { Perfil, PerfilSchema } from './perfiles.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Perfil.name, schema: PerfilSchema }]),
  ],
  controllers: [PerfilesController], //punto de entrada de la API
  providers: [PerfilesService], //proveedor de datos y lógica de la aplicación
})
export class PerfilesModule {}
