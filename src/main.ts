import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar validaciones para los DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // remueve campos que no esten en el DTO
    forbidNonWhitelisted: true,
  }));

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
  console.log('API corriendo en http://localhost:3000');
}
bootstrap();
