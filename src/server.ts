import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import * as morgan from 'morgan';
import { ApplicationModule } from './app/app.module';

const expressInstance = express();

expressInstance.use(morgan('dev'));

const app = NestFactory.create(ApplicationModule, expressInstance);
app.setGlobalPrefix('api');

app.listen(3000, () => console.log('Application is listening on port 3000.'));
