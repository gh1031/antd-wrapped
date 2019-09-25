console.log('babel running>>>>>>>>>>>>>>');

module.exports = {
  plugins: [
    // antd 打入dll
    // [
    //   "import",
    //   {
    //     "libraryName": "antd",
    //     "libraryDirectory": "es",
    //     "style": "css"
    //   }
    // ],
    ['@babel/plugin-syntax-dynamic-import'],
    ['@babel/plugin-transform-react-jsx'],
    ['@babel/plugin-proposal-decorators', { legacy: true, loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  presets: [['@babel/preset-env', { modules: false, useBuiltIns: 'usage' }], '@babel/preset-typescript'],
};
