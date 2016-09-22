var path = require('path');
var webpack = require('webpack');


module.exports = {

  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './src/app.js'
  ],
  output: {
    path: '/dist',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
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
    new webpack.HotModuleReplacementPlugin()
  ]
};