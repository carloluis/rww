'use strict';

let production = process.argv.indexOf('-p') > -1? true: false;
const NODE_ENV = production? 'production': 'development';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } }
        ]
    },
    plugins: [HTMLWebpackPluginConfig],
    devtool: '#source-map',
    devServer: { inline: true },
    watch: true
}
