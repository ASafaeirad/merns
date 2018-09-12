const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const path = require('path');

const config = {
  devtool: 'source-map',
  target: 'node',
  mode: 'production',
  entry: ['./src'],
  output: {
    path: path.join(__dirname, '..', '..', 'dist'),
    filename: 'api.bundle.js',
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  externals: [nodeExternals({ modulesFromFile: true })],
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.graphql$/, exclude: /node_modules/, loader: 'raw-loader' },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new Dotenv(),
  ],
};

module.exports = config;
