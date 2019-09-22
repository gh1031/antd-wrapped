const OFF = 0;
const WARN = 1;
const ERROR = 2;
const isGit = (process.env.ESLIT_ENV === 'GIT');
const path = require('path');
const webpack = require('webpack');

const config = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.resolve(__dirname),
              view: path.resolve(__dirname, './src/view'),
              src: path.resolve(__dirname, './src'),
              lib: path.resolve(__dirname, './lib'),
            },
          },
        },
      },
    },
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  rules: {
    'no-console': isGit ? ERROR : WARN,
    'react/jsx-uses-react': WARN,
    'no-unused-vars': WARN,
    'react/jsx-filename-extension': OFF,
    'react/forbid-prop-types': OFF,
    'no-plusplus': OFF,
    'global-require': OFF,
    'import/no-extraneous-dependencies': OFF,
    'jsx-a11y/anchor-is-valid': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN,
    'no-shadow': OFF,
    'no-underscore-dangle': OFF,
    'arrow-parens': OFF,
    'import/no-unresolved': OFF,
    'import/prefer-default-export': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'consistent-return': OFF,
  },
};

module.exports = config;
