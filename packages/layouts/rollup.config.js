import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
    input: 'src/index.js',
    output: {
        file: 'build/lib/layouts.umd.js',
        format: 'umd',
        name: 'jahia.layouts',
        sourcemap: true,
        globals: {
            lodash: '_'
        }
    },
    external: [
        '@jahia/react-material',
        '@material-ui/core',
        '@material-ui/icons',
        'classnames',
        'lodash',
        'react',
        'react-i18next',
        'recompose',
        'rxjs',
        'prop-types'
    ],

    plugins: [
        resolve({
            extensions: ['.js', '.jsx']
        }),
        json(),
        babel({
            exclude: 'node_modules/**',
            presets: [['env', {modules: false}], 'stage-3', 'react'],
            plugins: ['external-helpers']
        })
    ]
};
