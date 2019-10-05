module.exports = {
  extends: require.resolve('./packages/eslint-plugin-xcritical/src/base'),
  rules: {
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'object-shorthand': 'off'
  }
};
