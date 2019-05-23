const webpack = require('webpack');
const merge = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  devServer: {
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
      'DEVELOPMENT': JSON.stringify(true),
      DEVTEST: JSON.stringify(true),
    }),
  ]
})