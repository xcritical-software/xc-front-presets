const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TeamcityBundleSizePlugin = require('../helper/teamcity-bundle-size');
const helper = require('../helper');


module.exports = (options) => {
  helper.env.showState();

  const devOptions = options.development || {};
  const prodOptions = options.production || {};

  const aliases = options.aliases || { development: {}, production: {} };

  return {
    cache: helper.env.isDevMode ? devOptions.cache : prodOptions.cache,
    mode: helper.env.getMode,
    context: helper.paths.SRC_DIR,
    stats: {
      all: false,
      modules: true,
      errors: true,
      warnings: true,
      timings: true,
    },
    entry: {
      app: './index',
    },
    output: {
      path: helper.paths.BUILD_DIR,
      publicPath:
        (helper.env.isDevMode
          ? devOptions.publicPath
          : prodOptions.publicPath) || '/',
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      modules: ['node_modules'],
      alias: helper.env.isDevMode
        ? {
          ...aliases.development,
          ...aliases.production,
        }
        : aliases.production,
      ...options.resolve,
      ...(helper.env.isDevMode ? devOptions.resolve : prodOptions.resolve),
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.tsx?$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: 'ts-loader',
                  options: options.typescript || {},
                },
              ],
            },
            {
              test: /\.(js|jsx)$/,
              exclude: [/node_modules/],
              use: {
                loader: 'babel-loader',
                options: helper.loaders.getBabelOptions({
                  babel: options.babel || {},
                  isDevMode: helper.env.isDevMode,
                }),
              },
            },
            {
              test: /\.(css)$/,
              use: helper.loaders.generateStyleLoaders({ importLoaders: 1 }),
            },
            {
              test: /\.(eot|ttf|woff|woff2)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'fonts/[name].[ext]',
                  },
                },
              ],
            },
            {
              test: /\.(png|jpg|svg|gif)$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: 'images/[name].[ext]',
                  },
                },
              ],
            },
          ].concat(options.loaders || []),
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      new HtmlWebpackPlugin({
        template: helper.paths.resolveExistPath('public/index.html'),
        favicon: helper.paths.resolveExistPath('public/favicon.ico'),
        filename: 'index.html',
        minify: helper.env.isDevMode
          ? {}
          : {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
      }),
      new TeamcityBundleSizePlugin(),
    ]
      .concat((options.plugins && options.plugins.common) || [])
      .filter(Boolean),
    optimization: options.optimization,
    devtool: helper.env.isNeedSourceMaps ? 'source-map' : false,
  };
};
