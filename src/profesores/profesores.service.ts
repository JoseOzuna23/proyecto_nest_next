import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProfesoreDto } from './dto/create-profesore.dto';
import { UpdateProfesoreDto } from './dto/update-profesore.dto';
import { Profesor } from './entities/profesores.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProfesoresService {
  constructor(

    @InjectRepository(Profesor)
    private readonly profesoreRepository: Repository<Profesor>,
  ){}
 async create(createProfesoreDto: CreateProfesoreDto) {
    
    try {
      const profesores = this.profesoreRepository.create(createProfesoreDto);
      await this.profesoreRepository.save(profesores);
      return profesores;
    } catch (error) {
      // Handle exception (e.g., log it, rethrow it, etc.)
      throw error;
    }
  }

  findAll() {
    return this.profesoreRepository.find();
  }

 async findOne(id: string) {
    let profesor: Profesor;
    const queryBuilder = this.profesoreRepository.createQueryBuilder();
    profesor = await queryBuilder
      .where('id =:id', {
        id: id,
      }).getOne();

    if (!profesor) {
      throw new NotFoundException(`Profesor con id ${id} no encontrado`);
    }
    return profesor;
    
  }

 async update(id: string, updateProfesoreDto: UpdateProfesoreDto) {
    const profesor = await this.profesoreRepository.preload({
      id: id,
      ...updateProfesoreDto,
    });
    if (!profesor) throw new NotFoundException(`Profesor con id ${id} no encontrado`);

    try {
      await this.profesoreRepository.save(profesor);
      return profesor;
    } catch (error) {
      // Handle exception (e.g., log it, rethrow it, etc.)
      throw error;
    }
   
  }

  async remove(id: string) {
    
    const profesor = await this.findOne(id); 
    await this.profesoreRepository.remove(profesor);
  }
}
