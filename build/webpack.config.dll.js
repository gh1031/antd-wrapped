const path = require('path');
const webpack = require('webpack');

const isProd = process.env === 'production';
const { resolve } = require('./util');

module.exports = {
  mode: isProd ? 'production' : 'development',
  resolve: {
    extensions: ['.js', '.json'],
  },
  entry: [
    'antd',
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
    path: resolve('../dist'),
    filename: 'dll_[name]_[chunkhash].js',
    library: 'dll_[name]_[chunkhash]',
  },
  plugins: [
    new webpack.DllPlugin({
      path: resolve('../dist/dll__mainfest.json'),
      name: 'dll_[name]_[chunkhash]',
    }),
  ],
};
