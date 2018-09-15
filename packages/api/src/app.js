import express from 'express';
import expressJWT from 'express-jwt';
import { Morgan } from '@fem/logger';
import { env } from '@fem/dev-utils';

export const app = express();

if (env.isDev) {
  app.use(Morgan('api'));
}

app.use(expressJWT({
  credentialsRequired: false,
  secret: process.env.JWT_SECRET,
}));
