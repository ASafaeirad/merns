const env = require('@frontendmonster/dev-utils/env');

const config = env.isDev
  ? require('./configs/webpack/webpack.dev.config')
  : require('./configs/webpack/webpack.prod.config');

module.exports = config;
