import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

import {postCss,
  baseConfig,
  loaders,
  output,
  plugins,
} from './webpack.config.babel';

const SRC = 'src';
const DIST = 'dist';
const EXAMPLE = 'example';


const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.IgnorePlugin(/webpack-stats\.json$/),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    inject: 'body',
    template: './example/index.html',
  }),
  new ExtractTextPlugin('index.css', {
      allChunks: true
  }),
];

const additionalLoaders = {
  jsx: {
    loaders: ['babel'],
  },
  css: {
    loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
  },
};

const webpackConfig = baseConfig();

webpackConfig.postcss = postCss(webpack);
webpackConfig.plugins = plugins(devPlugins);
webpackConfig.module.loaders = loaders(additionalLoaders);
webpackConfig.output = output();

// ------------------------------------
// Entry Points
// ------------------------------------
webpackConfig.entry = {
  index: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(`${EXAMPLE}/index.js`)
  ],
};

export default webpackConfig;
