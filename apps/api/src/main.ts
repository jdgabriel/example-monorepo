import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_PORT);
  console.info('Monorepo API started at port', process.env.API_PORT);
}
bootstrap();
