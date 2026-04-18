import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PerfilesService } from './perfiles.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';

@Controller('perfiles') // Prefijo: /perfiles
export class PerfilesController {
  constructor(private readonly perfilesService: PerfilesService) {}

  // GET /perfiles
  @Get()
  findAll() {
    return this.perfilesService.findAll();
  }

  // GET /perfiles/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilesService.findOne(id);
  }

  // POST /perfiles
  @Post()
  create(@Body() dto: CreatePerfilDto) {
    return this.perfilesService.create(dto);
  }
}
