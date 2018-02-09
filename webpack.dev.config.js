const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonWebpack = require('./webpack.common');
const path = require('path');
const { name } = require('./package.json');

module.exports = merge(commonWebpack('latest'), {
  devtool: 'eval',
  plugins: [new webpack.EnvironmentPlugin({ NODE_ENV: 'development' })],
  devServer: {
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'assets')
    ],
    quiet: false
  }
});
