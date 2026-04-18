import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Aqui se define el esquema de la base de datos para la entidad "Perfil". Esto incluye los campos que tendrá la
// colección de perfiles en la base de datos, así como sus tipos y restricciones. El esquema se utiliza para crear
// un modelo que se puede usar para interactuar con la base de datos, permitiendo realizar operaciones como crear,
// leer, actualizar y eliminar documentos de perfiles.

export type PerfilDocument = Perfil & Document;

@Schema()
export class Perfil {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  rol: string;

  @Prop({ required: true })
  correo: string;

  @Prop({ default: false })
  activo: boolean;

  @Prop({ required: true })
  fecha_nacimiento: string;
}

export const PerfilSchema = SchemaFactory.createForClass(Perfil);
