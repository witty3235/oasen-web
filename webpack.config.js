'use strict';

var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  cache: true,
  entry: ['./src/App.tsx', './scss/style.scss'],

  // Where the output of our compilation ends up
  output: {
    path: path.resolve(__dirname, './dist/'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js'
  },

  module: {
    loaders: [{
      // The loader that handles ts and tsx files.  These are compiled
      // with the ts-loader and the output is then passed through to the
      // babel-loader.  The babel-loader uses the es2015 and react presets
      // in order that jsx and es6 are processed.
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader'
    }, {
      // The loader that handles any js files presented alone.
      // It passes these to the babel-loader which (again) uses the es2015
      // and react presets.
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      publicPath: '/dist/css',
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "dist/css/style.css"
    })
  ],
  resolve: {
    // Files with the following extensions are fair game for webpack to process
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '*.scss', '*.css']
  },
};