import express from 'express';
import expressJWT from 'express-jwt';
import { Morgan } from '@fem/logger';

export const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(Morgan('api'));
}

app.use(expressJWT({
  credentialsRequired: false,
  secret: process.env.JWT_SECRET,
}));
