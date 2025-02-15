import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { PaginacionDto } from 'src/common/dtos/paginacion.dto';

@Injectable()
export class ProductosService {

  private readonly logger = new Logger('ProductosService');

  constructor(

    @InjectRepository(Producto)
    private readonly productoRespository: Repository<Producto>,
  ) { }
  async create(createProductoDto: CreateProductoDto) {

    try {

      const producto = this.productoRespository.create(createProductoDto);
      await this.productoRespository.save(producto);

      return producto;

    } catch (error) {

      this.handleException(error);

    }

  }

  findAll(paginacionDto: PaginacionDto) {

    const { limit = 10, offset = 0 } = paginacionDto;
    return this.productoRespository.find({
      take: limit,
      skip: offset,


    })
  }

  async findOne(id: string) {

    let producto: Producto;

    const queryBuilder = this.productoRespository.createQueryBuilder();
    producto = await queryBuilder
      .where('id =:id', {
        id: id,
      }).getOne();


    if (!producto)
      throw new NotFoundException(`Producto con id ${id} no encontrado`);

    return producto;
  }

  async update(id: string, updateProductoDto: UpdateProductoDto) {

    const producto = await this.productoRespository.preload({

      id: id,
      ...updateProductoDto
    });

    if (!producto) throw new NotFoundException(`Producto con id ${id} no encontrado`);

    try {

      await this.productoRespository.save(producto);

      return producto;


    } catch (error) {

      this.handleException(error);

    }


  }

  async remove(id: string) {
    const producto = await this.findOne(id);
    await this.productoRespository.remove(producto);
  }

  private handleException(error: any) {
    if (error.code === '23505')
      throw new BadRequestException(error.detail);

    this.logger.error(error)

    throw new InternalServerErrorException('Unexpecte error, check server logs');

  }
}
