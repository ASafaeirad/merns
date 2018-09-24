const { rimraf, series } = require('nps-utils');
const env = require('@frontendmonster/dev-utils/env');

module.exports.scripts = {
  clean: rimraf('dist'),

  dev: `${env.set(env.dev)} webpack-dev-server --color`,

  build: series('nps clean', `${env.set(env.prod)} webpack`),

  test: {
    default: `${env.set(env.test)} jest --runInBand`,
    watch: series.nps('test --watch'),
    cover: series.nps('test --coverage'),
  },
};
