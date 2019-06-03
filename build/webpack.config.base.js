const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackAssetsPlugin = require('html-webpack-include-assets-plugin');

const isProd = process.env.NODE_ENV === 'production';
const { resolve } = require('./util');
const dirInclude = require('./constant');
const manifest = require('../dist/dll__mainfest.json');

const config = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'cheap-eval-source-map',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: resolve('../dist'),
    publicPath: '/',
    filename: isProd ? '[name].[hash].js' : '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('..'),
      view: resolve('../src/view'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|less|scss)$/,
        use: [
          isProd
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: {},
            }
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
        include: [dirInclude.src, dirInclude.components],
      },
      {
        // 处理antd的样式
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [dirInclude.antd],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
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
