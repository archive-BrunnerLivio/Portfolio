const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const appPath = './src/index.js';
const outputPath = 'bundle.js';

var minimize = process.argv.indexOf('--minimize') !== -1;
module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: 'node_modules',
                loaders: ['babel-loader']
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file-loader"
            }

        ]
    },
    output: {
        filename: outputPath,
        path: path.join(__dirname, './dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
    },
    plugins: [
        new CopyWebpackPlugin([{
                from: 'src/assets',
                to: 'assets'
            },
            {
                from: 'src/index.html',
            }
        ])
    ]
};