import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({
    transform: true,            // Convierte los datos a los tipos correctos
    whitelist: true,            // Elimina las propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // Lanza un error si hay propiedades no permitidas
  }));
  await app.listen(process.env.PORT ?? 4100);
}
bootstrap();
