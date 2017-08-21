console.log(__dirname);

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

