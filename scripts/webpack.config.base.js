const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackAssetsPlugin = require('html-webpack-include-assets-plugin');

const isProd = process.env.NODE_ENV === 'production';
const { resolve } = require('./util');
const DIR_MAP = require('./constant');
const manifest = require('../dist/dll__mainfest.json');
require('./env');

const config = {
  mode: process.env.NODE_ENV,
  // devtool: isProd ? 'source-map' : 'cheap-eval-source-map',
  devtool: 'source-map',
  entry: {
    index: resolve('../src/index.js'),
  },
  output: {
    path: resolve('../build'),
    publicPath: '/',
    filename: isProd ? '[name].[contenthash].js' : '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': resolve('..'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: DIR_MAP.node_modules,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(c|le|sc)ss$/,
        use: [
          isProd
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'less-loader',
        ],
        include: [DIR_MAP.src, DIR_MAP.components],
      },
      {
        // 处理antd的样式
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [DIR_MAP.antd],
      },
    ],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      // context: manifest,
      manifest,
    }),
    new HtmlWebpackPlugin({
      template: resolve('../index.html'),
    }),
    new HtmlWebpackAssetsPlugin({
      assets: `${manifest.name}.js`,
      append: false,
    }),
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PROXY_BASE': JSON.stringify('/api'),
    }),
  ],
};

/**
 * npm run optimization 启动dev并分析
 */
if (process.env.OPTIMIZATION) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
