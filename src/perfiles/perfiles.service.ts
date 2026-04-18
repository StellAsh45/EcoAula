import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Perfil, PerfilDocument } from './perfiles.schema';
import { CreatePerfilDto } from './dto/create-perfil.dto';

// Aqui va la logica de negocio, es decir, las funciones que se encargan de realizar las operaciones CRUD (Create, Read)
// sobre la base de datos. Estas funciones pueden ser llamadas desde los controladores para manejar las solicitudes HTTP y devolver las respuestas correspondientes.
@Injectable()
export class PerfilesService {
  constructor(
    @InjectModel(Perfil.name) private perfilModel: Model<PerfilDocument>,
  ) {}

  // Obtener todos los perfiles
  async findAll(): Promise<Perfil[]> {
    return this.perfilModel.find().exec();
  }

  // Obtener un perfil por ID
  async findOne(id: string): Promise<Perfil> {
    const perfil = await this.perfilModel.findById(id).exec();
    if (!perfil) throw new NotFoundException(`Perfil #${id} not found`);
    return perfil;
  }

  // Crear un perfil
  async create(dto: CreatePerfilDto): Promise<Perfil> {
    const newPerfil = new this.perfilModel(dto);
    return newPerfil.save();
  }
}
