const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const { name } = require('./package.json');

module.exports = function(version) {
  return {
    entry: ['whatwg-fetch', 'babel-polyfill', './src/js/index.js'],
    output: {
      path: path.join(__dirname, 'dist/'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: path.join(__dirname, 'src/js/'),
          exclude: /node_modules/,
          options: { cacheDirectory: true }
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: { sourceMap: true, minimize: true }
              },
              { loader: 'sass-loader', options: { sourceMap: true } }
            ]
          })
        }
      ]
    },
    plugins: [new ExtractTextPlugin({ filename: 'main.css' })]
  };
};
