import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInscripcioneDto } from './dto/create-inscripcion.dto';
import { UpdateInscripcioneDto } from './dto/update-inscripcion.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Inscripcion } from './entities/inscripcion.entity';

@Injectable()
export class InscripcionesService {

  constructor(
    @InjectRepository(Inscripcion)
    private readonly inscripcionRepository: Repository<Inscripcion>,
  ) { }

  async create(createInscripcioneDto: CreateInscripcioneDto) {
    try {
      const inscripcion = this.inscripcionRepository.create(createInscripcioneDto);
      await this.inscripcionRepository.save(inscripcion);
      return inscripcion;
    } catch (error) {
      // Handle exception (e.g., log it, rethrow it, etc.)
      throw error;
    }

  }

  findAll() {
    return this.inscripcionRepository.find({
      relations: ['curso', 'cuota', 'estudiante'],
    });
  }

  findOne(id: string) {
    const queryBuilder = this.inscripcionRepository.createQueryBuilder('inscripcion');
    const inscripcion = queryBuilder
      .leftJoinAndSelect('inscripcion.curso', 'curso')
      .leftJoinAndSelect('inscripcion.cuota', 'cuota')
      .leftJoinAndSelect('inscripcion.estudiante', 'estudiante')
      .where('inscripcion.id = :id', { id })
      .getOne();

    if (!inscripcion) {
      throw new NotFoundException(`Inscripción con id ${id} no encontrada`);
    }
    return inscripcion;
  }

  update(id: number, updateInscripcioneDto: UpdateInscripcioneDto) {
    return `This action updates a #${id} inscripcione`;
  }

  remove(id: number) {
    return `This action removes a #${id} inscripcione`;
  }
}
