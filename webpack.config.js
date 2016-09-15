'use strict';

let production = process.argv.indexOf('-p') > -1? true: false;
const NODE_ENV = production? 'production': 'development';

const webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
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
var UglifyJsPluginConfig = new webpack.optimize.UglifyJsPlugin({
    compress: { 
    	warnings: !!production
    },
    mangle: !!production,
    comments: !production
});

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/dist',
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
            		presets: ['react', 'es2015'] },
            		cacheDirectory: true
            	}
        ]
    },
    plugins: [HTMLWebpackPluginConfig, EnvPluginConfig, UglifyJsPluginConfig],
    devtool: '#source-map',
    resolve: {
        extensions: ['', '.js']
    },
    devServer: { 
        inline: true,
        port: 8082
    },
    watch: true
}
