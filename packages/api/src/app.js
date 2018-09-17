import express from 'express';
import expressJWT from 'express-jwt';
import { Morgan } from '@fem/logger';

export const createApp = ({ secret, verbose } = {}) => {
  const app = express();

  if (verbose) {
    app.use(Morgan('api'));
  }

  app.use(expressJWT({
    credentialsRequired: false,
    secret,
  }));

  return app;
};
