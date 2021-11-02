const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = (options) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
  ].concat((options.plugins && options.plugins.prod) || []).filter(Boolean),

  performance: {
    assetFilter: function assetFilter(assetFilename) {
      return !/(^(favicon\.))/.test(assetFilename);
    },
  },
});
