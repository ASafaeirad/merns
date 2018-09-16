import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { env } from '@fem/dev-utils';

const dependencies = Object.keys(require('./package.json').dependencies || {});

const libname = 'webpack-utils';

const config = {
  input: './index.js',
  output: {
    file: `./dist/${libname}.js`,
    name: libname,
    format: 'cjs',
    sourcemap: true,
  },

  plugins: [
    nodeResolve(),
    babel({
      exclude: '**/node_modules/**',
      runtimeHelpers: true,
    }),
    commonjs(),
  ],
  external: [...dependencies],
};

if (env.isProd) {
  config.plugins.push(terser());
}

export default config;
