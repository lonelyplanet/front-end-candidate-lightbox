/**
 * Would have preferred a "postcss.config.babel.js" here, but:
 * https://github.com/postcss/postcss-loader/issues/192
 */

module.exports = {
  plugins: [
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies
    require('autoprefixer'),
  ],
};
