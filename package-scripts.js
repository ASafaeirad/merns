const { series } = require('nps-utils');
const { env } = require('@fem/dev-utils');

module.exports.scripts = {
  clean: {
    default: 'lerna run clean',
    core: 'lerna run clean --scope @merns/*',
    libs: 'lerna run clean --scope @fem/*',
  },

  lint: {
    default: 'lerna run lint',
    core: 'lerna run lint --scope @merns/*',
    libs: 'lerna run lint --scope @fem/*',
  },

  build: {
    default: 'lerna run build',
    core: 'lerna run build --scope @merns/*',
    libs: 'lerna run build --scope @fem/*',
  },

  watch: {
    default: 'lerna run build:watch --parallel',
    core: 'lerna run build:watch --parallel --scope @merns/*',
    libs: 'lerna run build:watch --parallel --scope @fem/*',
  },

  dev: `${env.set(env.dev)} gulp dev`,

  test: 'lerna run test',

  check: series('nps clean', 'nps build', 'nps test', 'yarn lint'),
};
