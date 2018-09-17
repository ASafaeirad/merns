const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpackUtils = require('@fem/webpack-utils');

const libName = 'controller';

const config = {
  devtool: 'source-map',
  target: 'web',
  mode: 'production',
  entry: './src/index.js',
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
  module: {
    rules: [
      ...webpackUtils.generateWebpackRules(
        {
          graphql: true,
          babel: true,
        },
      ),
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
};

module.exports = config;
