require('babel-core/register')  ({
    ignore: /node_modules\//
});

import path from 'path';
import webpack from 'webpack';
import _ from 'lodash';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import postCssPxToRem from 'postcss-pxtorem';

const SRC = 'src';
const DIST = 'dist';
const EXAMPLE = 'example';

// ------------------------------------
// Plugins
// ------------------------------------
const plugins = () => {
  return [
    new webpack.DefinePlugin(environmentVariables),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(/webpack-stats\.json$/),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: './example/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'index.css',
      allChunks: true
    }),
  ];
};

// ------------------------------------
// BaseConfig
// ------------------------------------
const baseConfig = function getBaseConfig() {
  const baseConfig = {
    context: path.resolve('./'),
    devtool: 'source-map',
    entry: {
      index: [
        'webpack-hot-middleware/client?reload=true',
        path.resolve(`${EXAMPLE}/index.js`)
      ],
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

  return baseConfig;
};

// ------------------------------------
// Bundle Output
// ------------------------------------
const output = () => ({
  path: path.resolve(`./${DIST}`),
  filename: '[name].js',
  chunkFilename: '[name].js',
  publicPath: '/',
  libraryTarget: 'umd',
  library: 'LPLightbox',
});

// ------------------------------------
// PostCss
// ------------------------------------
const postCss = (webpack) => {
  return [
    require('postcss-cssnext'),
    require('lost'),
    postCssPxToRem({
        rootValue: 16,
        replace: false,
        mediaQuery: true,
    }),
  ];
};

// ------------------------------------
// Loaders
// ------------------------------------
const loaders = function getLoaders() {
  const baseLoaders = {
      jsx: {
        test: /\.jsx?$/,
          include: [
            /node_modules\/dv-*/,
            path.resolve(`./${SRC}`),
            path.resolve(`./${EXAMPLE}`),
          ],
        loaders: ['babel'],
      },
      json: {
        test: /\.json$/,
        loader: 'json',
      },
      css: {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
      },
      image: {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader?name=src/[name].[ext]',
      }
  };

  return _.toArray(baseLoaders);
};

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

const webpackConfig = baseConfig();

webpackConfig.plugins = plugins();
webpackConfig.postcss = postCss(webpack);
webpackConfig.module.loaders = loaders();
webpackConfig.output = output();

export default webpackConfig;
