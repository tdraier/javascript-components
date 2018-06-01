import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import glob from 'glob';
import path from 'path';

export default {
    input: 'src/index.js',
    output: {
        file: 'build/lib/react-router.umd.js',
        format: 'umd',
        name:'jahia.reactrouter',
        sourcemap: true,
        globals: {
            "@jahia/apollo-dx": "jahia.apollodx",
            "lodash": "_",
            "material-ui/styles":"materialUiStyles"
        }
    },
    external:[
        "history",
        "prop-types",
        "react",
        "react-router"
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