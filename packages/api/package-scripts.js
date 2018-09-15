const { rimraf, series } = require('nps-utils');
const { env } = require('@fem/dev-utils');


module.exports.scripts = {
  clean: rimraf('dist'),

  lint: 'eslint ./src --ext .js',

  dev: `${env.set(env.dev)} webpack`,

  build: `${env.set(env.prod)} webpack`,

  test: {
    default: `${env.set(env.test)} jest --runInBand`,
    watch: series.nps('test --watch'),
    cover: series.nps('test --coverage'),
  },
};
