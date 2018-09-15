const { rimraf, crossEnv, series } = require('nps-utils');
const { env } = require('@fem/dev-utils');

module.exports = {
  scripts: {
    clean: rimraf('dist'),

    lint: 'eslint ./src --ext ".js, .jsx"',

    dev: `${crossEnv(env.dev)} webpack-dev-server --color`,

    build: series('nps clean', `${crossEnv(env.prod)} webpack`),

    test: {
      default: `${crossEnv(env.test)} jest --runInBand`,
      watch: series.nps('test --watch'),
      cover: series.nps('test --coverage'),
    },
  },
};
