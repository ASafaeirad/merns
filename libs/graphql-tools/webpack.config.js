const nodeExternals = require('webpack-node-externals');
const path = require('path');

const libName = 'graphql-tools';

const config = {
  devtool: 'source-map',
  target: 'node',
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${libName}.js`,
    library: libName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  externals: [nodeExternals({ modulesFromFile: true })],
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};

module.exports = config;
