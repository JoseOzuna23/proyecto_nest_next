import { Module } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { EstudiantesController } from './estudiantes.controller';
import { Estudiante } from './entities/estudiante.entity';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  imports: [
      TypeOrmModule.forFeature([ Estudiante ]),
       AuthModule
    ]
})
export class EstudiantesModule {}
