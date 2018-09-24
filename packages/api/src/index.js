/* eslint-disable import/first  */
import clear from '@frontendmonster/dev-utils/clear';
import dotenv from 'dotenv';
import { startServer } from './server';

dotenv.config();

clear(' ');
startServer();
