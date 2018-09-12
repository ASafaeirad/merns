const { rimraf, crossEnv, series } = require('nps-utils');

const envs = {
  dev: () => crossEnv('NODE_ENV=development'),
  prod: () => crossEnv('NODE_ENV=production'),
  test: () => crossEnv('NODE_ENV=test'),
};

module.exports = {
  scripts: {
    clean: rimraf('dist'),

    lint: 'eslint ./src --ext .js',

    dev: `${envs.dev()} webpack`,

    build: `${envs.prod()} webpack`,

    test: {
      default: `${envs.test()} jest --runInBand`,
      watch: series.nps('test --watch'),
      cover: series.nps('test --coverage'),
    },
  },
};
