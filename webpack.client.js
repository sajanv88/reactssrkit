const path = require('path');
module.exports = {
  target: 'node',
  entry: './client.js',
  output: {
    filename: 'client.bundle.js',
    path: path.resolve(__dirname, 'build/public'),
    publicPath: '/build/public'
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
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}