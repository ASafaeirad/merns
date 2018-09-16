const path = require('path');

const libName = 'graphql-tools';

const config = {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'client.js',
    library: libName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.mjs$/, include: /node_modules/, type: 'javascript/auto' },
    ],
  },
};

module.exports = config;
