import { Module } from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service';
import { InscripcionesController } from './inscripciones.controller';
import { Inscripcion } from './entities/inscripcion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [InscripcionesController],
  providers: [InscripcionesService],
   imports: [
        TypeOrmModule.forFeature([ Inscripcion ]),
         AuthModule
      ]
})
export class InscripcionesModule {}
