const { merge } = require('webpack-merge');

const commonConfig = require('./configs/webpack.common');
const helper = require('./helper');


function configCreator(options) {
  const mode = helper.env.isDevMode ? 'dev' : 'prod';
  const envConfig = require(`./configs/webpack.${mode}.js`);

  return merge(commonConfig(options), envConfig(options));
}

module.exports = {
  configCreator,
  env: helper.env,
  paths: helper.paths,
  loaders: helper.loaders,
};
