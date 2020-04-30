import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

const plugins = [
    typescript({ target: "es6" }),
    babel({
        exclude: 'node_modules/**'
    }),
];

if (process.env.production) {
    plugins.push(terser());
}

export default {
    input: './index.ts',
    output: {
        file: 'index.js',
        format: 'cjs'
    },
    plugins
};