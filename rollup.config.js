import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/javascript/index.js',
    output: {
        file: 'lib/react-dxcomponents.umd.js',
        format: 'umd',
        name:'jahia.reactcomponents',
        sourcemap: true,
        globals: {
            "@jahia/apollo-dx": "jahia.apollodx",
            "lodash": "_",
            "material-ui/styles/index":"materialUiStyles"
        }
    },
    external:[
        "@jahia/apollo-dx",
        "graphql-tag",
        "history",
        "i18next",
        "i18next-xhr-backend",
        "jss",
        "jss-preset-default",
        "lodash",
        "material-ui",
        "material-ui/styles/index",
        "material-ui-icons",
        "prop-types",
        "react",
        "react-apollo",
        "react-dom",
        "react-flexbox-grid",
        "react-i18next",
        "react-jss",
        "react-redux",
        "react-router",
        "react-router-dom",
        "redux",
        "redux-extend-reducer",
        "theming"
    ],

    plugins: [
        resolve({
            extensions: [ '.js', '.jsx' ]
        }),
        babel({
            exclude:'node_modules/**',
            presets: [ [ 'es2015', { modules: false } ], 'stage-3', 'react' ],
            plugins: [ 'external-helpers' ]
        })

    ]
};