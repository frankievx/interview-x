var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

 
module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/app.js',
  output: { 
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /.js?$/, loader: 'babel-loader', exclude: /node_modules/},
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css?modules&importLoaders=2&sourceMap!autoprefixer') },
      { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2!sass' },
      { test: /\.(jpg|png)$/, loader: 'url?limit=2500000' }
    ]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin(),

    // optimizations
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ],
  progress: true
};