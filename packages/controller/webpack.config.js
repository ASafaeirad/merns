const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpackUtils = require('@fem/webpack-utils');

const libName = 'controller';

const config = {
  devtool: 'source-map',
  target: 'web',
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${libName}.bundle.js`,
    library: libName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.json', '.jsx'],
  },
  externals: [nodeExternals({ modulesFromFile: true })],
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      ...webpackUtils.generateWebpackRules(
        {
          babel: true,
          graphql: true,
        },
      ),
    ],
  },
};

module.exports = config;
