'use strict';

const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = 'production';

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
var EnvPluginConfig = new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV': JSON.stringify(NODE_ENV)
    }
});
var UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
    compress: {
    	warnings: true
    },
    mangle: true,
    comments: false
});

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        publicPath: 'http://some-cdn.com/', //load resource from cdn
        filename: 'prod-bundle.js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        HtmlWebpackPluginConfig,
        EnvPluginConfig,
        UglifyJsPluginConfig
    ],
    devtool: '#source-map' //remove
}
