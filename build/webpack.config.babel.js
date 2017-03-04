require('babel-core/register')  ({
    ignore: /node_modules\/(?!dv-*)/
});
import path from 'path';
import webpack from 'webpack';
import _ from 'lodash';

import postCssPxToRem from 'postcss-pxtorem';

const SRC = 'src';
const DIST = 'dist';
const EXAMPLE = 'example';

// ------------------------------------
// Plugins
// ------------------------------------
const plugins = (additionalPlugins) => {
  return [
    new webpack.DefinePlugin(environmentVariables),
    new webpack.optimize.OccurrenceOrderPlugin(),
    ...additionalPlugins,
  ];
}

// ------------------------------------
// BaseConfig
// ------------------------------------
const baseConfig = function getBaseConfig(additionalOutputParameters) {
  const baseConfig = {
    context: path.resolve('./'),
    devtool: 'source-map',
    entry: {
      index: `./${SRC}/index.js`,
    },
    resolve: {
      root: path.resolve(`./${SRC}`),
      modulesDirectories: [
        'src',
        'node_modules'
      ],
      extensions: ['', '.js', '.json']
    },
    module: {},
  };

  _.merge(baseConfig, additionalOutputParameters);

  return baseConfig;
}

// ------------------------------------
// Bundle Output
// ------------------------------------
const output = function getLoaders(additionalOutputParameters) {
  const baseOutput = {
    path: path.resolve(`./${DIST}`),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'LPLightbox',
  };

  _.merge(baseOutput, additionalOutputParameters);

  return baseOutput;
}

// ------------------------------------
// PostCss
// ------------------------------------
const postCss = (webpack) => {
  return [
    require('post-cssnext'),
    require('lost'),
    postCssPxToRem({
        rootValue: 16,
        replace: false,
        mediaQuery: true,
    }),
  ];
}

// ------------------------------------
// Loaders
// ------------------------------------
const loaders = function getLoaders(additionalLoaders) {
  const baseLoaders = {
      jsx: {
        test: /\.jsx?$/,
          include: [
            /node_modules\/dv-*/,
            path.resolve(`./${SRC}`),
            path.resolve(`./${EXAMPLE}`),
          ],
      },
      json: {
        test: /\.json$/,
        loader: 'json',
      },
      css: {
        test: /\.css$/,
      },
  };

  _.merge(baseLoaders, additionalLoaders);

  const loaders = _.toArray(baseLoaders);

  return loaders;
}

// ------------------------------------
// Environment
// ------------------------------------
const ENV = process.env.NODE_ENV || 'development';
const environmentVariables = {
  'process.env': {
    NODE_ENV: JSON.stringify(ENV),
  },
  NODE_ENV: ENV,
  __DEV__: ENV === 'development',
  __PROD__: ENV === 'production',
  __TEST__: ENV === 'test',
  __BASENAME__: JSON.stringify(process.env.BASENAME || ''),
};

export {baseConfig, loaders, plugins, postCss, output};
