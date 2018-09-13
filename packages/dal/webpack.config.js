const nodeExternals = require('webpack-node-externals');
const path = require('path');

const libName = 'dal';

const config = {
  devtool: 'source-map',
  target: 'node',
  mode: 'production',
  entry: './src',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `${libName}.bundle.js`,
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
