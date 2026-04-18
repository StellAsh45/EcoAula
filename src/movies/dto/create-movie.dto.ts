// Este archivo define el DTO (Data Transfer Object) para la creación de una película.
// Un DTO es un objeto que se utiliza para transferir datos entre diferentes partes de una aplicación, en este caso,
// entre el cliente y el servidor. El CreateMovieDto especifica los campos necesarios para crear una nueva película,
// como el título, el año, el ID del director y el género. Este DTO se puede utilizar en los controladores para validar
// y estructurar los datos recibidos en las solicitudes HTTP antes de procesarlos en la lógica de negocio.
export class CreateMovieDto {
  title: string;
  year: number;
  director_id: number;
  genre: string;
}
