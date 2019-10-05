/**
 * @fileoverview xc-front-lint
 * @author XCritical Software
 */

module.exports = {
  configs: {
    base: {
      extends: require.resolve('./base'),
    },
    prettier: {
      extends: require.resolve('./prettier'),
    },
  },
};
