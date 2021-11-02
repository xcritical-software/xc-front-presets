const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = (options) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
    // replaced to HashedModuleIdsPlugin → optimization.moduleIds: 'hashed'. https://webpack.js.org/migrate/5/#update-outdated-options
    // Webpack team recommended a use default optimization options
    // new webpack.HashedModuleIdsPlugin({
    //   hashFunction: 'sha256',
    //   hashDigest: 'hex',
    //   hashDigestLength: 8,
    // }),
  ].concat((options.plugins && options.plugins.prod) || []).filter(Boolean),

  performance: {
    assetFilter: function assetFilter(assetFilename) {
      return !/(^(favicon\.))/.test(assetFilename);
    },
  },
});
