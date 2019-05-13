const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isProd = process.env.NODE_ENV === 'production';
const resolve = (dir) => path.resolve(__dirname, dir);
console.log(resolve(__dirname, 'src'), '>>>')
const config = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'cheap-eval-source-map',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: resolve('dist/lib'),
    publicPath: '/',
    filename: isProd ? '[name].[chunkhash].js' : '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      'view': resolve('src/view'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [resolve('node_modules')],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          isProd
          ? {
              loader: MiniCssExtractPlugin.loader,
              options: {}
            }
          : 'style-loader',
          'css-loader',
          'less-loader',
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, 'dist/mainfest.json'),
      manifest: path.resolve(__dirname, 'dist/mainfest.json'),
    })
  ]
}


/**
 * npm run optimization 启动dev并分析
 */
if (process.env.OPTIMIZATION) {
  config.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config;