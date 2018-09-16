const { series, concurrent } = require('nps-utils');

module.exports.scripts = {
  clean: 'lerna run clean',

  lint: {
    default: 'lerna run lint',
    core: 'lerna run lint --scope @merns/*',
    libs: 'lerna run lint --scope @fem/*'
  },

  build: {
    default: 'lerna run build',
    core: 'lerna run build --scope @merns/*',
    libs: 'lerna run build --scope @fem/*'
  },

  watch: {
    default: 'lerna run build:watch --parallel',
    core: 'lerna run build:watch --parallel --scope @merns/*',
    libs: 'lerna run build:watch --parallel --scope @fem/*'
  },

  dev: {
    default: concurrent({
      api: {
        script: 'yarn workspace @merns/api run dev',
        color: 'null.bold'
      },
      dal: {
        script: 'yarn workspace @merns/dal run build:watch',
        color: 'null.bold'
      },
      controller: {
        script: 'yarn workspace @merns/controller run build:watch',
        color: 'null.bold'
      },
      common: {
        script: 'yarn workspace @merns/common run build:watch',
        color: 'null.bold'
      },
      web: {
        script: 'yarn workspace @merns/web run dev',
        color: 'null.bold'
      },
    }),
  },
  test: `lerna run test`,

  check: series('nps clean', 'nps build', 'nps test', 'yarn lint')
};
