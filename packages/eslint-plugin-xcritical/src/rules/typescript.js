const { rules: typescriptEslintRecommendedRules } = require('@typescript-eslint/eslint-plugin/dist/configs/all.js');


const typescriptRules = {
  ...typescriptEslintRecommendedRules,
  '@typescript-eslint/interface-name-prefix': ['error', {
    prefixWithI: 'always',
  }],
  '@typescript-eslint/indent': ['error', 2],
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/no-extra-parens': 'off',
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/prefer-function-type': 'off',
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/quotes': ['error', 'single'],
  '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
  '@typescript-eslint/no-unnecessary-condition': ['error', { ignoreRhs: true }],
  '@typescript-eslint/no-inferrable-types': 0, // this is a temporary solution due to problems in TS (see: https://github.com/microsoft/TypeScript/pull/30593)
  '@typescript-eslint/restrict-template-expressions': 0,
  '@typescript-eslint/space-before-function-paren': 0,
  '@typescript-eslint/explicit-function-return-type': [1, {
    allowExpressions: true,
    allowTypedFunctionExpressions: true,
    allowHigherOrderFunctions: true,
  }],
  'import/extensions': ['error', 'never', { svg: 'always' }],
  'import/no-extraneous-dependencies': 0,
  '@typescript-eslint/require-await': 0,
  '@typescript-eslint/promise-function-async': ['warn'],
  '@typescript-eslint/no-non-null-assertion': ['warn'],
  '@typescript-eslint/prefer-readonly-parameter-types': 0,
  '@typescript-eslint/no-unsafe-assignment': 0,
  '@typescript-eslint/no-unsafe-call': 0,
  '@typescript-eslint/no-unsafe-return': 0,
  '@typescript-eslint/no-unsafe-member-access': 0,
  '@typescript-eslint/explicit-module-boundary-types': ['warn'],
  '@typescript-eslint/init-declarations': 0,
  '@typescript-eslint/default-param-last': ['warn'],
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['warn'],
  '@typescript-eslint/no-loss-of-precision': 0,
  '@typescript-eslint/ban-tslint-comment': 0,
  '@typescript-eslint/no-confusing-non-null-assertion': 0,
};
module.exports = typescriptRules;
