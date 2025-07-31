import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstudiantesService {

  constructor(
    @InjectRepository(Estudiante)
    private readonly estudianteRepository: Repository<Estudiante>,
  ) { }

  async create(createEstudianteDto: CreateEstudianteDto) {
    try {
      const estudiante = this.estudianteRepository.create(createEstudianteDto);
      await this.estudianteRepository.save(estudiante);
      return estudiante;
    } catch (error) {
      // Handle exception (e.g., log it, rethrow it, etc.)
      throw error;
    }
  }

  findAll() {
    return this.estudianteRepository.find();
  }

  async findOne(id: string) {
    let estudiante: Estudiante;
    const queryBuilder = this.estudianteRepository.createQueryBuilder();
    estudiante = await queryBuilder
      .where('id =:id', {
        id: id,
      }).getOne();

    if (!estudiante) {
      throw new NotFoundException(`Estudiante con id ${id} no encontrado`);
    }
    return estudiante;
  }

  async update(id: string, updateEstudianteDto: UpdateEstudianteDto) {
    const estudiante = await this.estudianteRepository.preload({
      id: id,
      ...updateEstudianteDto,
    });
    if (!estudiante) throw new NotFoundException(`Estudiante con id ${id} no encontrado`);

      try {

        await this.estudianteRepository.save(estudiante);

        return estudiante;

      } catch (error) {

        // Handle exception (e.g., log it, rethrow it, etc.)
        throw error;
      }
    
  }

  async remove(id: string) {
    const estudiante = await this.findOne(id);
    await this.estudianteRepository.remove(estudiante);
  }
}
