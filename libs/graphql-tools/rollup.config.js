import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { env } from '@fem/dev-utils';

const dependencies = Object.keys(require('./package.json').dependencies);

const clientLibname = 'graphql-tools-client';
const serverLibname = 'graphql-tools-server';

const config = [
  {
    input: './src/client/index.js',
    output: {
      file: './client/index.js',
      name: clientLibname,
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
  }, {
    input: './src/server/index.js',
    output: {
      file: './server/index.js',
      name: serverLibname,
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
  },
];

if (env.isProd) {
  config[0].plugins.push(terser());
  config[1].plugins.push(terser());
}

export default config;
