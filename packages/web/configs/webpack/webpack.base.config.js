const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { DefinePlugin } = require('webpack');
const webpackUtils = require('@fem/webpack-utils');
const path = require('path');

const config = {
  target: 'web',
  entry: ['./src'],
  output: {
    path: path.join(__dirname, '..', '..', 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].map',
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [...webpackUtils.generateWebpackRules(
      {
        babel: true,
        graphql: true,
        font: true,
        image: true,
        style: true,
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    )],
  },
  plugins: [
    new DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    new CaseSensitivePathsPlugin(),
  ],
};

module.exports = config;
