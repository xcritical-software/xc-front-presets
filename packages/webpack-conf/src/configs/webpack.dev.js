module.exports = (options) => ({
  plugins: ((options.plugins && options.plugins.dev) || []).filter(Boolean),
  devServer: {
    compress: true,
    open: true,
    hot: true,
    client: {
      logging: 'none',
      overlay: {
        warnings: false,
        errors: true,
      },
    },
    historyApiFallback: true,
    allowedHosts: 'all',
    ...options.devServer,
  },
  performance: {
    hints: false,
  },
});
