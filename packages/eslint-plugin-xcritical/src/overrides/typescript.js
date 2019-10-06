const typescriptImportPluginSettings = require('eslint-plugin-import/config/typescript').settings;

const rules = require('../rules/typescript');


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
  rules: rules,
  settings: typescriptImportPluginSettings,
};
