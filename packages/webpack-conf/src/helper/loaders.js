const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const env = require('./env');


function generateStyleLoaders(cssOptions, preProcessor) {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: cssOptions.importLoaders,
        sourceMap: env.isNeedSourceMaps,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        postcssOptions: {
          plugins: function plugins() {
            return [
              require('postcss-preset-env')({
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              }),
              require('postcss-flexbugs-fixes'),
            ];
          },
        },
        sourceMap: env.isNeedSourceMaps,
      },
    },
  ];

  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: env.isNeedSourceMaps,
      },
    });
  }

  return loaders;
}

module.exports = {
  generateStyleLoaders,
};
