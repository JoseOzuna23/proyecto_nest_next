import { Module } from '@nestjs/common';
import { CuotasService } from './cuotas.service';
import { CuotasController } from './cuotas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuota } from './entities/cuota.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [CuotasController],
  providers: [CuotasService],

   imports: [
        TypeOrmModule.forFeature([ Cuota ]),
         AuthModule
      ]
})
export class CuotasModule {}
