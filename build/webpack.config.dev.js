const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const base = require('./webpack.config.base');
const { resolve } = require('./util');

module.exports = merge(base, {
  devServer: {
    contentBase: resolve('../dist'),
    port: 8080,
    hot: true,
    compress: false,
    noInfo: false,
    hot: true,
    open: true,
    logTime: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(true),
      DEVTEST: JSON.stringify(true),
    }),
  ],
});
