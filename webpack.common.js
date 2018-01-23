const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const { name } = require('./package.json');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = function (version) {
  return {
    entry: ['whatwg-fetch', 'babel-polyfill', './src/javascripts/index.js'],
    output: {
      path: path.join(__dirname, `dist/${name}/${version}`),
      filename: `${name}-${version}.min.js`,
      publicPath: ASSET_PATH
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.join(__dirname, 'src/javascripts/'),
          exclude: /node_modules/,
          options: { cacheDirectory: true }
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader?sourceMap?root=.',
                options: {
                  minimize: true
                }
              },
              {
                loader: 'sass-loader'
              }
            ]
          })
        }
      ]
    }
  };
};