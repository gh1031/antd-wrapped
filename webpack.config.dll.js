const path = require('path');
const webpack = require('webpack');
const isProd = process.env === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.json'],
  },
  entry: [
    'lodash',
    'react',
    'classnames',
    'react-dom',
    'react-router-dom',
    'redux',
    'react-redux',
    'redux-promise',
    'redux-logger',
    'react-router-config',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dll_[name]_[chunkhash].js',
    library: 'dll_[name]_[chunkhash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, 'dist/mainfest.json'),
      name: 'dll_[name]_[chunkhash]'
    })
  ]
}