import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common';
import { AppDataSource } from './data-source';

const PORT = process.env.PORT || '3000';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log("Data Source has been initialized!")
    })
    .catch((error) => console.log(error))
  app.useGlobalPipes(new ValidationPipe());  
  await app.listen(PORT);
}
bootstrap();
