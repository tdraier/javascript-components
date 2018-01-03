let SystemJSPlugin = require('webpack-systemjs-bundle-plugin/');
let webpack = require('webpack');
let nodeExternals = require('webpack-node-externals');

let config = {
        entry: {
            'react-dxcomponents': '.'
        },

        externals: [
            nodeExternals({importType: 'amd'})
        ],

        output: {
            path: __dirname + '/src/main/resources/javascript/bundles/',
            filename: "[name].js",
            libraryTarget: "amd",
            library: "[name]_[hash]"
        },

        plugins: [
            new SystemJSPlugin({
                path: __dirname + "/src/main/resources/javascript/bundles/[name].config.json",
                name: "[name]_[hash]"
            }),

            // new BundleAnalyzerPlugin({
            //     analyzerMode: 'static'
            // }),
            //
            // new webpack.optimize.CommonsChunkPlugin({
            //     name: 'node-static',
            //     // filename: 'node-static.js',
            //
            // }),
            // //MINIFICATION OF FILES
            // ,new DefinePlugin({
            //     'process.env':{
            //         'NODE_ENV': JSON.stringify('production')
            //     }
            // }),
            // new UglifyJsPlugin({
            //     compress:{
            //         warnings: false
            //     }
            // })
        ],

        devtool: 'source-map'

    }
;

module.exports = [config];