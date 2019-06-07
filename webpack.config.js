const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './components/index.js',
  // devtool: 'cheap-eval-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    library: 'antdWrapped',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname),
    }
  },
  externals: {
    antd: 'antd',
    react: 'React',
    lodash: 'loadsh',
    'lodash.debounce': 'lodash.debounce',
    'prop-types': 'prop-types',
    'react-router-dom': 'react-router-dom',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(c|le)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'antd-wrapped.css',
    }),
    new OptimizeCSSAssetsPlugin({}),
  ]
};
