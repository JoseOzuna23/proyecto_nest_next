import { Module } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { ProfesoresController } from './profesores.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Profesor } from './entities/profesores.entity';

@Module({
  controllers: [ProfesoresController],
  providers: [ProfesoresService],

  imports: [
        TypeOrmModule.forFeature([ Profesor]),
         AuthModule
      ]
})
export class ProfesoresModule {}
