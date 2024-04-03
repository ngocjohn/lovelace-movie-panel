/* eslint-disable no-unused-vars */
import nodeResolve from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const IS_DEV = process.env.ROLLUP_WATCH;

const serverOptions = {
  contentBase: ['./dist'],
  host: 'localhost',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const plugins = [nodeResolve(), IS_DEV && serve(serverOptions)];

export default {
  input: 'src/main.js',
  output: {
    file: './dist/lovelace-movie-panel.js',
    format: 'es',
    inlineDynamicImports: true,
  },
  plugins,
};
