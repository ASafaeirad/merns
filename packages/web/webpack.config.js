const { env } = require('@fem/dev-utils');

const config = env.isDev
  ? require('./configs/webpack/webpack.dev.config')
  : require('./configs/webpack/webpack.prod.config');

module.exports = config;
