const path = require('path');
const { env, generateWebpackRules } = require('@frontendmonster/dev-utils');
const nodeExternals = require('webpack-node-externals');

const libName = 'northui';

const config = {
  devtool: 'source-map',
  target: 'web',
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${libName}.bundle.js`,
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.json', '.jsx'],
  },
  externals: [nodeExternals({ modulesFromFile: true })],
  stats: {
    all: !env.isDev,
    colors: true,
    errors: true,
    warnings: true,
    env: true,
  },
  module: {
    rules: [
      ...generateWebpackRules(
        {
          babel: true,
          mjs: true,
        },
      ),
    ],
  },
};

module.exports = config;
