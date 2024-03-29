
const typescriptRules = {
  '@typescript-eslint/ban-ts-comment': 'error',
  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-this-alias': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'error',
  '@typescript-eslint/no-var-requires': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/triple-slash-reference': 'error',
  '@typescript-eslint/indent': ['error', 2],
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/no-extra-parens': 'off',
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/prefer-function-type': 'off',
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/quotes': ['error', 'single'],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error', {
    functions: false,
  }],
  '@typescript-eslint/no-inferrable-types': 0, // this is a temporary solution due to problems in TS (see: https://github.com/microsoft/TypeScript/pull/30593)
  '@typescript-eslint/restrict-template-expressions': 0,
  '@typescript-eslint/space-before-function-paren': 0,
  'import/extensions': ['error', 'never', {
    svg: 'always',
  }],
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
  '@typescript-eslint/no-empty-interface': 0,
  'react/prop-types': ['off'],
  '@typescript-eslint/no-unnecessary-condition': ['warn'],
  '@typescript-eslint/prefer-optional-chain': 1,
  '@typescript-eslint/prefer-nullish-coalescing': 1,
  '@typescript-eslint/explicit-function-return-type': 0,
  '@typescript-eslint/ban-types': ['warn'],
  '@typescript-eslint/no-empty-function': ['warn'],
  '@typescript-eslint/semi': ['error'],
  '@typescript-eslint/member-delimiter-style': ['error', {
    multiline: {
      delimiter: 'semi',
      requireLast: true,
    },
    singleline: {
      delimiter: 'semi',
      requireLast: true,
    },
    overrides: {
      interface: {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
      },
    },
  }],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'interface',
      format: ['PascalCase'],
      custom: {
        regex: '^I([A-Za-z]+)',
        match: true,
      },
    },
  ],
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error'],
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': ['error'],
};
module.exports = typescriptRules;
