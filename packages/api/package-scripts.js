const { rimraf, series } = require('nps-utils');
const env = require('@frontendmonster/dev-utils/env');


module.exports.scripts = {
  clean: rimraf('dist'),

  dev: `${env.set(env.dev)} gulp dev`,

  build: 'gulp build',

  test: {
    default: `${env.set(env.test)} jest --runInBand`,
    watch: series.nps('test --watch'),
    cover: series.nps('test --coverage'),
  },
};
