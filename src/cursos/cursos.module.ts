import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { Curso } from './entities/curso.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CursosController],
  providers: [CursosService],
   imports: [
          TypeOrmModule.forFeature([ Curso ]),
           AuthModule
        ]
})
export class CursosModule {}
