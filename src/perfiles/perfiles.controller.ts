import { Controller, Get, Post, Param, Body, Delete, Patch } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';

@Controller('perfiles')
export class PerfilesController {
  constructor(private readonly perfilesService: PerfilesService) {}

  @Get()
  findAll() {
    return this.perfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilesService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreatePerfilDto) {
    return this.perfilesService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: any) {
    return this.perfilesService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilesService.remove(id);
  }
}
