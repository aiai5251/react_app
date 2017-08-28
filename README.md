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


#实践React
1. 修改inde.js
```
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, world !</h1>,
    document.getElementById('root')
);

```
2. 修改webpack.config.js
```
module:{
    loaders: [{
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
        query: {
            presets:['react']
        }
    }]
},
```
3. 在inde.html中添加
`<div id="root"></div>`
4. 安装依赖包
`npm install react --save-dev`
`npm install react-dom --save-dev`
`npm install babel-loader --save-dev`
`npm install babel-preset-react --save-dev`
注：安装完以上四个可以试试`npm run webpack-dev-server`是否能运行起来，如果可以就不需要安装babel-core，如果不行就再安装下`npm install babel-core --save-dev`

#加载Css
1. 安装依赖包
`npm install css-loader style-loader --save-dev`
2. 在webpack.config.js 中修改moudle
```
module:{
    loaders: [{
        test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
        loader: 'babel-loader', // 加载模块 "babel" 是 "babel-loader" 的缩写
        query: {
            presets:['react']
        }
    }, 
    {
        test: /\.css$/, // Only .css files
        loader: 'style-loader!css-loader' // Run both loaders
    }]
},
```

#使用jquery请求
1. 安装依赖
`npm i jquery --save`
2. 使用
```
import $ from 'jquery';

var UserGist = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },
    componentDidMount: function() {
        console.log("asdasd");
        $.get(this.props.source, function(result) {
            console.log(result);
            var lastGist = result[0];
            if (this.isMounted()) {
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
            };
        }.bind(this));
    },
    render: function() {
        return (
            <div>
                {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <UserGist source="https://api.github.com/users/octocat/gists" />
    </div>,
    document.getElementById('root')
);
```

#备注
```
<!-- Before (15.4 and below) -->
var React = require('react');

var Component = React.createClass({
  mixins: [MixinA],
  render() {
    return <Child />;
  }
});

// After (15.5)
var React = require('react');
var createReactClass = require('create-react-class');

var Component = createReactClass({
  mixins: [MixinA],
  render() {
    return <Child />;
  }
});
```


#环境准备
1. 安装node
2. `sudo npm install webpack-dev-server -g`
