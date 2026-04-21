import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Perfil, PerfilDocument } from './perfiles.schema';
import { CreatePerfilDto } from './dto/create-perfil.dto';

@Injectable()
export class PerfilesService {
  constructor(
    @InjectModel(Perfil.name) private perfilModel: Model<PerfilDocument>,
  ) {}

  async findAll(): Promise<Perfil[]> {
    return this.perfilModel.find().exec();
  }

  async findOne(id: string): Promise<Perfil> {
    const perfil = await this.perfilModel.findById(id).exec();
    if (!perfil) throw new NotFoundException(`Perfil #${id} not found`);
    return perfil;
  }

  async create(dto: CreatePerfilDto): Promise<Perfil> {
    const newPerfil = new this.perfilModel(dto);
    return newPerfil.save();
  }

  async remove(id: string): Promise<any> {
    const result = await this.perfilModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Perfil #${id} not found`);
    return result;
  }

  async update(id: string, updateData: any): Promise<Perfil> {
    const updated = await this.perfilModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    if (!updated) throw new NotFoundException(`Perfil #${id} not found`);
    return updated;
  }
}
