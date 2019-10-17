const webpack = require('webpack');
const merge = require('webpack-merge');
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
      '/api': {
        target: 'http://localhost:3000',
        // target: 'http://34.92.254.140:3000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '/api': '/',
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true),
    }),
  ],
});
