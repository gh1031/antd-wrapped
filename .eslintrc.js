const OFF = 0;
const WARN = 1;
const ERROR = 2;
const isGit = (process.env.ESLIT_ENV === 'GIT');
const path = require('path');

const config = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript'
  ],
  plugins: [
    '@typescript-eslint',
    'react-hooks'
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'no-console': isGit ? ERROR : WARN,
    'no-unused-vars': WARN,
    'no-plusplus': OFF,
    'global-require': OFF,
    'import/no-extraneous-dependencies': OFF,
    'jsx-a11y/anchor-is-valid': OFF,
    'no-shadow': OFF,
    'no-underscore-dangle': OFF,
    'arrow-parens': OFF,
    'import/no-unresolved': OFF,
    'import/prefer-default-export': OFF,
    'react/jsx-filename-extension': OFF,
    'react/forbid-prop-types': OFF,
    'react/jsx-uses-react': WARN,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'react/jsx-one-expression-per-line': OFF,
    'react/require-default-props': OFF,
    'consistent-return': OFF,

    '@typescript-eslint/explicit-module-boundary-types': OFF,
  },
};

module.exports = config;
