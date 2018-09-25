const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { generateWebpackRules } = require('@frontendmonster/dev-utils/webpack');
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
    modules: [
      path.resolve(__dirname, '..', '..', '..', '..', 'node_modules'),
    ],
    extensions: ['.webpack.js', '.web.js', '.mjs', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      ...generateWebpackRules(
        {
          babel: true,
          graphql: true,
          font: true,
          image: true,
          style: true,
          mjs: true,
        },
      )],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    new CaseSensitivePathsPlugin(),
  ],
};

if (process.env.WBA) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
