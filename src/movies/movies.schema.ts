import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// Aqui se define el esquema de la base de datos para la entidad "Movie". Esto incluye los campos que tendrá la
// colección de películas en la base de datos, así como sus tipos y restricciones. El esquema se utiliza para crear
// un modelo que se puede usar para interactuar con la base de datos, permitiendo realizar operaciones como crear,
// leer, actualizar y eliminar documentos de películas.

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  director_id: number;

  @Prop({ required: true })
  genre: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
