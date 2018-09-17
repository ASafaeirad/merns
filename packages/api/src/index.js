/* eslint-disable import/first  */
import clear from '@fem/clear';
import dotenv from 'dotenv';
import { startServer } from './server';

dotenv.config();

clear(' ');
startServer();
