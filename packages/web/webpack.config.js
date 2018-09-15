const merge = require('webpack-merge');
const webpackBaseConfig = require('./configs/webpack/webpack.base.config');
const webpackDevConfig = require('./configs/webpack/webpack.dev.config');
const webpackProdConfig = require('./configs/webpack/webpack.prod.config');

let config = webpackBaseConfig; // eslint-disable-line import/no-mutable-exports

if (process.env.NODE_ENV === 'development') {
  config = merge(webpackBaseConfig, webpackDevConfig);
} else if (process.env.NODE_ENV === 'production') {
  config = merge(webpackBaseConfig, webpackProdConfig);
} else {
  throw new Error('Environment for webpack config not matched');
}

module.exports = config;
