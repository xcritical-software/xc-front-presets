const { settings: typescriptImportPluginSettings } = require('eslint-plugin-import/config/typescript');

const rulesTS = require('../rules/typescript');
const rulesJS = require('../rules/common');


module.exports = {
  files: ['**/*.{ts,tsx}'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...rulesJS,
    ...rulesTS,
  },
  settings: typescriptImportPluginSettings,
};
