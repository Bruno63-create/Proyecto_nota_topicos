import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // Elimina propiedades no declaradas en el DTO
    forbidNonWhitelisted: true, // Si llegan propiedades extra, lanza error 400
    transform: true,            // Convierte tipos si aplica (útil para Query/Params)
  }));
  await app.listen(3001);
}
bootstrap();