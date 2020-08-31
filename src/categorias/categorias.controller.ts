import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode } from '@nestjs/common';
import { Repository } from 'typeorm';
import { categorias } from 'src/models/categorias.model';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('categorias')
export class CategoriasController {

  constructor(
    @InjectRepository(categorias)
    private categoriasRepo: Repository<categorias>
  ){}

  @Get()
  async index(): Promise<categorias[]>{
    return this.categoriasRepo.find()
  }

  @Get(':id')
  async show(@Param('id') id: string): Promise<categorias>{
    return this.categoriasRepo.findOneOrFail(id)
  }

  @Post()
  async store(@Body() body: categorias): Promise<categorias>{
      const categoria = this.categoriasRepo.create(body);
      return this.categoriasRepo.save(categoria);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: categorias): Promise<categorias>{
    await this.categoriasRepo.findOneOrFail(id);
    this.categoriasRepo.update({id: +id}, body);
    return this.categoriasRepo.findOneOrFail(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async destroy(@Param('id') id: string): Promise<void> {
    await this.categoriasRepo.findOneOrFail(id);
    this.categoriasRepo.delete(id)
  }
}