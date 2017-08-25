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
    module:{
        loaders: [{
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
            query: {
                presets:['react']
            }
        }, {
            test: /\.css$/, // Only .css files
            loader: 'style-loader!css-loader' // Run both loaders
        }]
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