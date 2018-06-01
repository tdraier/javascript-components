import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import glob from 'glob';
import path from 'path';

export default {
    input: 'src/index.js',
    output: {
        file: 'build/lib/apollo-dx.umd.js',
        format: 'umd',
        name:'jahia.apollodx',
        sourcemap: true,
        globals: {
            "@jahia/apollo-dx": "jahia.apollodx",
            "lodash": "_",
            "material-ui/styles":"materialUiStyles"
        }
    },
    external:[
        "apollo-cache-inmemory",
        "apollo-client",
        "apollo-link",
        "apollo-link-http",
        "apollo-utilities",
        "graphql",
        "graphql-tag",
        "lodash",
        "zen-observable"
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