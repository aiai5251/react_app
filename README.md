# React_App

## 创建React项目

1. 创建package.json
`npm init -y`
2. 安装局部的webpack(指定版本)
`npm install webpack(@2.2.x) --save-dev`
3. 创建webpack.config.js
```
var config = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
    }
};

module.exports = config;
```
4. 修改package.json 中的scripts，添加
` "webpack": "webpack" `
5. 创建index.js，index.html
```
<!-- index.js -->
document.write('It works.')
```
```
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
  </head>
  <body>
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```
5. 执行
` npm run webpack `


#使用自动刷新服务：webpack-dev-server
1. 安装webpack-dev-server
`npm install webpack-dev-server --save--dev`
2. 安装热模块替换
`npm install --save-dev webpack-hot-middleware`
3. 更改webpack.config.js配置
```
    var webpack = require('webpack');


    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        './src/index.js'
    ],
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
```
4. 更改index.html
```
<!-- 不需要路径，可以自动找到 -->
<script src="bundle.js"></script>
```
5. 修改package.json 中的scripts，添加
`"webpack-dev-server": "webpack-dev-server --progress --colors"`
6. 执行npm install webpack-dev-server
7. 实践，更改index.js 中的内容，浏览器自动刷新，注意更改index.html中内容不会自动刷新

#环境准备
1. 安装node
2. `sudo npm install webpack-dev-server -g`
