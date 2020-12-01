import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import * as helmet from 'helmet';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  // Enable cors on development only
  app.enableCors();

  const serverConfig = config.get('server');

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
