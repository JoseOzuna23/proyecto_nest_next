import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';
import { AuthModule } from './auth/auth.module';
import { ProductosModule } from './productos/productos.module';
import { CommonModule } from './common/common.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { CuotasModule } from './cuotas/cuotas.module';
import { CursosModule } from './cursos/cursos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities:true,
      synchronize: true,

    }),
    AuthModule,
    ProductosModule,
    CommonModule,
    EstudiantesModule,
    ProfesoresModule,
    CuotasModule,
    CursosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
