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

// const webpack = require('webpack');
// const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const packageJSON = require('./package.json');

// const version = packageJSON.version;
// const name = packageJSON.name;

// module.exports = {
//   entry: {
//     [name]: ['whatwg-fetch', 'babel-polyfill', './client/js/index.js']
//   },
//   devtool: 'inline-source-map',
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: `[name]/${version}/[name]-${version}.min.js`,
//     publicPath: '/'
//   },
//   resolve: {
//     modules: ['client/js', 'node_modules']
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         include: path.join(__dirname, 'client/js/'),
//         exclude: /node_modules/,
//         options: { cacheDirectory: true }
//       },
//       {
//         test: /\.s?css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: [{
//             loader: 'css-loader?sourceMap?root=.',
//             options: {
//               minimize: true
//             }
//           }, {
//             loader: 'sass-loader'
//           }]
//         })
//       }
//     ]
//   },
//   plugins: [
//     new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
//     new webpack.optimize.UglifyJsPlugin({ minimize: true }),
//     new ExtractTextPlugin({ filename: `[name]/${version}/[name]-${version}.min.css` }),
//     new webpack.optimize.ModuleConcatenationPlugin()
//   ]
// };
