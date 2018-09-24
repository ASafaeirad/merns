import express from 'express';
import expressJWT from 'express-jwt';
import { morgan } from '@frontendmonster/dev-utils/logger';

export const createApp = ({ secret, verbose } = {}) => {
  const app = express();

  if (verbose) {
    app.use(morgan('api'));
  }

  app.use(expressJWT({
    credentialsRequired: false,
    secret,
  }));

  return app;
};
