import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';

@Injectable()
export class CursosService {

  constructor(
    @InjectRepository(Curso)
    private readonly cursoRepository: Repository<Curso>,
  ) {}

  async create(createCursoDto: CreateCursoDto) {
    try {
      const curso = this.cursoRepository.create(createCursoDto);
      await this.cursoRepository.save(curso);
      return curso;
    } catch (error) {
      // Handle exception (e.g., log it, rethrow it, etc.)
      throw error;
    }
    return ;
  }

  findAll() {
    return this.cursoRepository.find();
  }

 async findOne(id: string) {
    let curso: Curso;
    const queryBuilder = this.cursoRepository.createQueryBuilder();
    curso = await queryBuilder
      .where('id =:id', {
        id: id,
      }).getOne();

    if (!curso) {
      throw new NotFoundException(`Curso con id ${id} no encontrado`);
    }
    return curso; 
    
  }

  async update(id: string, updateCursoDto: UpdateCursoDto) {
    const curso = await this.cursoRepository.preload({
      id: id,
      ...updateCursoDto,
    });
    if (!curso) throw new NotFoundException(`Curso con id ${id} no encontrado`);

    try {
      await this.cursoRepository.save(curso);
      return curso;
    } catch (error) {
      // Handle exception (e.g., log it, rethrow it, etc.)
      throw error;
    } 
    
  }

  remove(id: number) {
    return `This action removes a #${id} curso`;
  }
}
