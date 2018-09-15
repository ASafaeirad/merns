const { rimraf, crossEnv, series } = require('nps-utils');
const { env } = require('@fem/dev-utils');

module.exports = {
  scripts: {
    clean: rimraf('dist'),

    lint: 'eslint ./src --ext .js',

    dev: `${crossEnv(env.dev)} webpack`,

    build: series('nps clean', `${crossEnv(env.prod)} webpack`),

    test: {
      default: `${crossEnv(env.test)} jest --runInBand`,
      watch: series.nps('test --watch'),
      cover: series.nps('test --coverage'),
    },
  },
};
