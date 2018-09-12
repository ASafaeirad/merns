const merge = require('webpack-merge');
const baseConfig = require('./configs/webpack/webpack.base.config');
const devConfig = require('./configs/webpack/webpack.dev.config');

let config = baseConfig; // eslint-disable-line import/no-mutable-exports

if (process.env.NODE_ENV === 'development') {
  config = merge({
    customizeArray(_, devValue, key) {
      // use node-externals in dev mode
      if (key === 'externals') {
        return devValue;
      }

      return undefined;
    },
  })(baseConfig, devConfig);
}

module.exports = config;
