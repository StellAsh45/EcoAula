import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema({ collection: 'usuarios', versionKey: false })
export class Usuario {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  rol: string;

  @Prop({ required: true })
  correo: string;

  @Prop({ required: true })
  contrasena: string;

  @Prop({ default: false })
  activo: boolean;

  @Prop()
  tokenActivacion: string;

  @Prop({ default: Date.now })
  creado_en: Date;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
