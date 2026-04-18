// Este archivo define el DTO (Data Transfer Object) para la creación de un perfil.
// Un DTO es un objeto que se utiliza para transferir datos entre diferentes partes de una aplicación, en este caso,
// entre el cliente y el servidor. El CreatePerfilDto especifica los campos necesarios para crear un nuevo perfil,
// como el nombre, rol, correo, activo y fecha_nacimiento. Este DTO se puede utilizar en los controladores para validar
// y estructurar los datos recibidos en las solicitudes HTTP antes de procesarlos en la lógica de negocio.
import { IsString, IsEmail, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreatePerfilDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  rol!: string;

  @IsEmail()
  @IsNotEmpty()
  correo!: string;

  @IsBoolean()
  @IsOptional()
  activo?: boolean; // opcional, default false

  @IsString()
  @IsNotEmpty()
  fecha_nacimiento!: string;
}
