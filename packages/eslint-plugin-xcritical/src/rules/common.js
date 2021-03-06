const commonRules = {
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'class-methods-use-this': 'off',
  'import/prefer-default-export': 'off',
  'import/order': ['error', {
    'newlines-between': 'always-and-inside-groups',
    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    pathGroupsExcludedImportTypes: ['builtin'],
    pathGroups: [
      {
        pattern: '@xcritical/**',
        group: 'external',
        position: 'after',
      },
    ],
  }],
  'import/newline-after-import': ['error', {
    count: 2,
  }],
  'import/no-cycle': 'warn',
  'default-case': 'off',
  'jsx-quotes': ['error', 'prefer-double'],
  'no-param-reassign': 'warn',
  'no-plusplus': [
    'error',
    {
      allowForLoopAfterthoughts: true,
    },
  ],
  'prefer-const': 'warn',
  'prefer-destructuring': ['error', {
    array: false,
    object: true,
  }, {
    enforceForRenamedProperties: false,
  }],
  'react/jsx-curly-spacing': [
    'error',
    {
      when: 'always',
      children: true,
    },
  ],
  'no-console': [1, { allow: ['error'] }],
  'react/button-has-type': 'warn',
  'react/prop-types': [
    'error',
    {
      ignore: ['children', 'theme', 'className', 'style', 'size', 'color', 'round', 'disabled'],
    },
  ],
  'react/no-unused-prop-types': 'warn',
  'react/require-default-props': 'warn',
  'react/forbid-prop-types': 'off',
  'react/sort-comp': 'warn',
  'react/jsx-props-no-spreading': 0,
  'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
  'jsx-a11y/href-no-hash': 'off',
  'jsx-a11y/anchor-is-valid': [
    'warn',
    {
      aspects: ['invalidHref'],
    },
  ],
  'no-use-before-define': [
    'error',
    {
      functions: false,
    },
  ],
  'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: 'if', next: '*' },
    { blankLine: 'always', prev: '*', next: 'if' },
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
};

module.exports = commonRules;
