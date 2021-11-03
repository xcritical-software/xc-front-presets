const commonRules = require('./rules/common');


module.exports = {
  extends: ['airbnb'],
  plugins: ['react-hooks'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 8,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    benchmark: true,
    expect: true,
    React: true,
    suite: true,
  },
  rules: commonRules,
};
