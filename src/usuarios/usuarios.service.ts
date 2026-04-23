import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './usuarios.schema';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) {}

  async findAll(): Promise<UsuarioDocument[]> {
    return this.usuarioModel.find().exec();
  }

  async findByEmail(correo: string): Promise<UsuarioDocument | null> {
    return this.usuarioModel.findOne({ correo }).exec();
  }

  async findOne(id: string): Promise<UsuarioDocument> {
    const usuario = await this.usuarioModel.findById(id).exec();
    if (!usuario) throw new NotFoundException(`Usuario #${id} no encontrado`);
    return usuario;
  }

  async create(dto: CreateUsuarioDto): Promise<Usuario> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(dto.contrasena, salt);
    
    const newUsuario = new this.usuarioModel({
      ...dto,
      contrasena: hashedPassword
    });
    return newUsuario.save();
  }

  async remove(id: string): Promise<any> {
    const result = await this.usuarioModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Usuario #${id} no encontrado`);
    return result;
  }

  async update(id: string, updateData: any): Promise<Usuario> {
    if (updateData.contrasena) {
      const salt = await bcrypt.genSalt(10);
      updateData.contrasena = await bcrypt.hash(updateData.contrasena, salt);
    }

    const updated = await this.usuarioModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    if (!updated) throw new NotFoundException(`Usuario #${id} no encontrado`);
    return updated;
  }
}
