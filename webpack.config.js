const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
        filename: 'app/index.js',
        path: path.join(__dirname, './dist'),
        publicPath: './assets'
    },
    resolve: {
        extensions: ['', '.js', '.sass'],
        root: [path.join(__dirname, './src')]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/assets',
                to: 'assets'
            },
            {
                from: 'src/index.html',
            }
        ])
    ]
};