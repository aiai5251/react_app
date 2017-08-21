# react_app

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
4. 修改package.json 中的scripe，添加
` "dev": "webpack" `
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
` npm run dev `


#环境准备
1. 安装node
