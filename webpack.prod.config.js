const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonWebpack = require('./webpack.common');
const { name, version } = require('./package.json');
const path = require('path');

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
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')],
    quiet: false,
  }
});
