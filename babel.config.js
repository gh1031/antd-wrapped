console.log('babel running>>>>>>>>>>>>>>');

const { MODULE_ENV, NODE_ENV } = process.env;

const isCjs = MODULE_ENV === 'cjs';
const isDev = NODE_ENV === 'development';

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
    ['@babel/plugin-transform-react-jsx'],
    ['@babel/plugin-proposal-decorators', { legacy: true, loose: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  presets: [
    [
      '@babel/env',
      ['cjs', 'es'].includes(MODULE_ENV) && { modules: isCjs ? 'cjs' : false, useBuiltIns: 'usage', corejs: 3 },
      isDev && { targets: { node: 'current' } },
    ].filter(Boolean),
    '@babel/typescript',
  ],
};
