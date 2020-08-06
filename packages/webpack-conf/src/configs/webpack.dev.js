const helper = require('../helper');


module.exports = (options) => ({
  plugins: ((options.plugins && options.plugins.dev) || []).filter(Boolean),
  devServer: {
    contentBase: helper.paths.ROOT_DIR,
    publicPath: '',
    compress: true,
    clientLogLevel: 'silent',
    open: true,
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      timings: true,
    },
    historyApiFallback: true,
    disableHostCheck: true,
    ...options.devServer,
  },
  performance: {
    hints: false,
  },
});
