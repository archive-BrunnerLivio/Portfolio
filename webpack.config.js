const webpack = require('webpack');
const path = require('path');

var minimize = process.argv.indexOf('--minimize') !== -1;
module.exports = {
    entry: {
        app: ['./src/app/app']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: 'node_modules',
                loaders: ['babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        filename: 'assets/index.js',
        path: path.join(__dirname, './dist')
    },
    resolve: {
        extensions: ['', '.js', '.sass'],
        root: [path.join(__dirname, './src')]
    }
};