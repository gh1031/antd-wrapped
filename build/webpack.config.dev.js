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
    open: true,
    logTime: true,
    overlay: true,
    proxy: {
      "/proxy/": {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "/proxy/": "/",
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
  ],
});
