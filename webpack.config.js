const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  target: 'web',
  context: path.resolve('example'),
  entry: './index.jsx',
  output: {
    path: path.resolve('example/static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        }
      }
    ]
  },
  resolve: {
    root: path.resolve('example'),
    alias: {
      'physics-grid': path.resolve('src')
    },
    extensions: ['', '.js', '.jsx', '.sass'],
    modulesDirectories: ['node_modules']
  },
  devServer: {
    port: 5000,
    contentBase: path.resolve('example/static'),
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};