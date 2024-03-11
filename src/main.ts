import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('NestJS Shop API')
    .setDescription('NestJS Shop API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);
  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}
bootstrap().catch((err) => {
  console.log(err);
});
