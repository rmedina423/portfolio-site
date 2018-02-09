const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonWebpack = require('./webpack.common');
const { name, version } = require('./package.json');
const path = require('path');

module.exports = merge(commonWebpack(version), {
  devtool: 'source-map',
  plugins: [
    new CopyWebpackPlugin([
      { from: 'public', to: '.' },
      { from: 'assets', to: '.' }
    ]),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});
