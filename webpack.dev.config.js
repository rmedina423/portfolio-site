const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonWebpack = require('./webpack.common');
const path = require('path');
const { name } = require('./package.json');

module.exports = merge(commonWebpack('latest'), {
  output: {
    filename: `${name}-latest.js`
  },
  devtool: 'eval',
  plugins: [
    new ExtractTextPlugin({ filename: `${name}-latest.css` }),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: `/`,
    quiet: false,
  }
});