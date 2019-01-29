import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import url from 'rollup-plugin-url';

export default {
    input: 'src/index.js',
    output: {
        file: 'build/lib/registry.umd.js',
        format: 'umd',
        name: 'jahia.registry',
        sourcemap: true,
        globals: {
            "lodash": "_",
        }
    },
    external:[
        "lodash",
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
        }),
        url({
            limit: 100 * 1024,
            include: ["**/*.woff", "**/*.woff2", "**/*.ttf", "**/*.eot"],
            emitFiles: true
        })
    ]
};