import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCuotaDto } from './dto/create-cuota.dto';
import { UpdateCuotaDto } from './dto/update-cuota.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuota } from './entities/cuota.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CuotasService {

  constructor(
    @InjectRepository(Cuota)
    private readonly cuotaRepository: Repository<Cuota>,
  ) { }

  async create(createCuotaDto: CreateCuotaDto) {

    try {
      const cuota = this.cuotaRepository.create(createCuotaDto);
      await this.cuotaRepository.save(cuota);
      return cuota;
    } catch (error) {
      // Handle exception (e.g., log it, rethrow it, etc.)
      throw error;
    }

  }

  async findAll() {
    return await this.cuotaRepository.find();
  }

  async findOne(id: string) {
    const queryBuilder = this.cuotaRepository.createQueryBuilder('cuota');
    const cuota = await queryBuilder
      .leftJoinAndSelect('cuota.curso', 'curso')
      .where('cuota.id = :id', { id })
      .getOne();

    if (!cuota) {
      throw new NotFoundException(`Cuota con id ${id} no encontrada`);
    }
    return cuota;

  }

  async update(id: string, updateCuotaDto: UpdateCuotaDto) {
    const cuota = await this.cuotaRepository.preload({
      id: id,
      ...updateCuotaDto,
    });
    if (!cuota) throw new NotFoundException(`Cuota con id ${id} no encontrada`);

    try {
      await this.cuotaRepository.save(cuota);
      return cuota;
    } catch (error) {
      // Handle exception (e.g., log it, rethrow it, etc.)
      throw error;
    }

  }

  async remove(id: string) {
    const cuota = await this.findOne(id);
    await this.cuotaRepository.remove(cuota);

  }
}
