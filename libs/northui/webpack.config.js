const path = require('path');
const webpackUtils = require('@fem/webpack-utils');
const { env } = require('@fem/dev-utils');

const libName = 'northui';

const config = {
  devtool: 'source-map',
  target: 'web',
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${libName}.bundle.js`,
    library: libName,
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.json', '.jsx'],
  },
  externals: [Object.keys(require('./package.json').dependencies)],
  stats: {
    all: !env.isDev,
    colors: true,
    errors: true,
    warnings: true,
    env: true,
  },
  module: {
    rules: [
      ...webpackUtils.generateWebpackRules(
        {
          babel: true,
          mjs: true,
        },
      ),
    ],
  },
};

module.exports = config;
