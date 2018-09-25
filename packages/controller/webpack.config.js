const path = require('path');
const { env, generateWebpackRules } = require('@frontendmonster/dev-utils');

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
  externals: [Object.keys(require('./package.json').dependencies).filter(_ => _ !== 'graphql')],
  stats: {
    all: !env.isDev,
    colors: true,
    errors: true,
    warnings: true,
    env: true,
  },
  module: {
    rules: [
      ...generateWebpackRules(
        {
          graphql: true,
          babel: true,
          mjs: true,
        },
      ),
    ],
  },
};

module.exports = config;
