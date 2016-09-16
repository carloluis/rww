'use strict';

const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const NODE_ENV = 'development';

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
var EnvPluginConfig = new webpack.DefinePlugin({
    'process.env':{
        'NODE_ENV': JSON.stringify(NODE_ENV)
    }
});
var CopyWebpackPluginConfig = new CopyWebpackPlugin([{
    from: __dirname + '/assets', 
    to: __dirname + '/dist/assets'
}],{
    ignore: ['*.txt'],
    copyUnmodified: false
});

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
        //publicPath: 'http://localhost:8082/',
        publicPath: '/',
        filename: 'bundle.js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [
            { 
            	test: /\.js$/, 
            	exclude: /node_modules/, 
            	loader: 'babel-loader', 
            	query: { 
            		presets: ['react', 'es2015']
                },
        		cacheDirectory: true
        	}
        ]
    },
    plugins: [HTMLWebpackPluginConfig, EnvPluginConfig, CopyWebpackPluginConfig],
    resolve: {
        extensions: ['', '.js']
    },
    devtool: '#source-map',
    devServer: { 
        inline: true,
        port: 8082,
        colors: true,
        progress: true,
        historyApiFallback: true,
        contentBase: './dist'
    },
    watch: true
}
