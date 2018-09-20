const { HotModuleReplacementPlugin } = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const { chProcessing, chDisable } = require('@fem/logger');
const webpackBaseConfig = require('./webpack.base.config');

const devConfig = {
  devtool: 'source-map',
  mode: 'development',
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new ProgressBarPlugin({
      summary: false,
      format: `${chDisable('[webpac] › ')}${chProcessing('⬢')} ${chProcessing('〖:bar〗')}${chProcessing(':percent')}`,
      incomplete: ' ',
      complete: '⬛',
    }),
  ],
  stats: {
    all: false,
    colors: true,
    errors: true,
    warnings: true,
    env: true,
  },
  devServer: {
    contentBase: false,
    compress: true,
    port: 3000,
    hot: true,
    stats: 'errors-only',
  },
};

const config = merge(webpackBaseConfig, devConfig);

module.exports = config;
