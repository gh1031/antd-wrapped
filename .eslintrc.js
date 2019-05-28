const off = 0;
const warn = 1;
const error = 2;
const isGit = process.env.ESLIT_ENV = 'GIT';
const path = require('path');

const config = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': path.resolve(__dirname),
              'view': path.resolve(__dirname, './src/view')
            }
          }
        }
      }
    }
  },
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  rules: {
    'no-console': isGit ? error : warn,
    'react/jsx-uses-react': warn,
    'no-unused-vars': warn,
    'react/jsx-filename-extension': off,
    'react/forbid-prop-types': off,
    'no-plusplus': off,
    'global-require': off,
    'import/no-extraneous-dependencies': off,
  },
}


module.exports = config;