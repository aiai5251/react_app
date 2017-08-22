'use strict';
var webpack = require('webpack');

var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './src',
        stats: { 
            colors: true 
        },
        historyApiFallback: true,
        inline: true
    }
};

module.exports = config;