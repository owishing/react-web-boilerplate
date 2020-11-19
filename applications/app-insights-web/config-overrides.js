const path = require('path');
const fs = require('fs');
const { override, babelInclude, adjustStyleLoaders } = require('customize-cra');

module.exports = (config, env) =>
  Object.assign(
    config,
    override(
      /* Makes sure Babel compiles the stuff in the common folder */
      babelInclude([path.resolve('src'), fs.realpathSync('../../packages')]),
      adjustStyleLoaders(({ use: [, css] }) => {
        css.options.modules = {
          localIdentName: '[local]--[hash:base64:5]',
        };
      })
    )(config, env)
  );
