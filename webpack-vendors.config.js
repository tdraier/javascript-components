let SystemJSPlugin = require('webpack-systemjs-bundle-plugin/');

let config = {
        entry: {
            "vendor-bundle": [
                "lodash",
                "react",
                "react-apollo",
                "react-dom",
                "redux-extend-reducer",
                "material-ui",
                "react-redux/lib/index",
                "redux"
            ]
        },

        externals: {},

        output: {
            path: __dirname + '/src/main/resources/javascript/bundles/',
            filename: "[name].js",
            libraryTarget: "amd",
            library: "[name]_[hash]"
        },

        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: true,
                            //     sourceMap: true,
                            //     importLoaders: 1,
                            //     localIdentName: "[name]--[local]--[hash:base64:8]"
                            }
                        },
                        // "postcss-loader" // has separate config, see postcss.config.js nearby
                    ]
                },
            ]
        },

        plugins: [
            new SystemJSPlugin({
                path: __dirname + "/src/main/resources/javascript/bundles/[name].config.json",
                name: "[name]_[hash]"
            }),

            // new BundleAnalyzerPlugin({
            //     analyzerMode: 'static'
            // }),
        ],

        devtool: 'source-map'

    }
;

module.exports = [config];