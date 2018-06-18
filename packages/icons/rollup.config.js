import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import glob from 'glob';
import path from 'path';

export default {
    input: 'src/index.js',
    output: {
        file: 'build/lib/icons.umd.js',
        format: 'umd',
        name:'jahia.icons',
        sourcemap: true,
        globals: {
        }
    },
    external:[
        "@material-ui/core",
        "react",
        "recompose"
    ],

    plugins: [
        resolve({
            extensions: [ '.js', '.jsx' ]
        }),
        json(),
        babel({
            exclude:'node_modules/**',
            presets: [ [ 'env', { modules: false } ], 'stage-3', 'react' ],
            plugins: [ 'external-helpers' ]
        })

    ]
};