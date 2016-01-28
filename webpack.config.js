var path = require('path');

module.exports = {
  context: path.resolve('app/js'),
  entry: ['./utils', './app.js'],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/app/assets/js/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'app'
  },
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
      }
    ]
  },
  watch: true
}
