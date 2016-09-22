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
      { test: /\.css$/, loader: 'style!css!postcss' },
      { test: /\.less$/, loader: 'style!css!postcss!less' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(jpe?g|gif)$/i, loaders: [ 
        'file?hash=sha512&digest=hex&name=[hash].[ext]', 
        'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
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