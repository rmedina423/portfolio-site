const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonWebpack = require('./webpack.common');
const { name, version } = require('./package.json');

module.exports = merge(commonWebpack(version), {
  output: {
    filename: `${name}-${version}.min.js`,
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin({ filename: `${name}-${version}.min.css` }),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
});
