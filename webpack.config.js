'use strict';

var path = require('path');

module.exports = {
  cache: true,
  entry: './src/App.tsx', 

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
    }]
  },
  plugins: [
  ],
  resolve: {
    // Files with the following extensions are fair game for webpack to process
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
};