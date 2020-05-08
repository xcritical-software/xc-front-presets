const commonRules = {
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'class-methods-use-this': 'off',
  'import/prefer-default-export': 'off',
  'import/order': ['error', {
    groups: [
      ['builtin', 'external', 'internal'],
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
    VariableDeclarator: {
      array: false,
      object: true,
    },
    AssignmentExpression: {
      array: true,
      object: false,
    },
  }, {
    enforceForRenamedProperties: true,
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
};

module.exports = commonRules;
