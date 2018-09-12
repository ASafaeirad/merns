const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const StartServerPlugin = require('start-server-webpack-plugin');

const config = {
  watch: true,
  mode: 'development',
  entry: ['webpack/hot/poll?1000'],
  devtool: 'cheap-module-source-map',

  externals: [nodeExternals({ modulesFromFile: true, whitelist: ['webpack/hot/poll?1000'] })],

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.BannerPlugin({ banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
    new StartServerPlugin('api.bundle.js'),
  ],

  stats: {
    all: false,
    colors: true,
    errors: true,
    warnings: true,
    env: true,
  },
};

module.exports = config;
