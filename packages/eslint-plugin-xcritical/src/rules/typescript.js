const typescriptEslintRecommendedRules = require('@typescript-eslint/eslint-plugin/dist/configs/all.json').rules;


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
  '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true }],
};
module.exports = typescriptRules;
