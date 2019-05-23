const off = 0;
const warn = 1;
const error = 2;
const isGit = process.env.ESLIT_ENV = 'GIT',

const config = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  presets: ["env", "react"],
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
  }
}


module.exports = config;