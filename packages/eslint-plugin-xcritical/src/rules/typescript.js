const typescriptEslintRecommendedRules = require('@typescript-eslint/eslint-plugin/dist/configs/all.json').rules;


export const typescriptRules = {
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
  '@typescript-eslint/quotes': 'single',
};
