const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: ['url-loader']
      }
    ]
  },
  externals: [webpackNodeExternals()]
}