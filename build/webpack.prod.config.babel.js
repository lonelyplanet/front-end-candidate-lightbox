import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import WebpackStrip from 'strip-loader';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';
import path from 'path';

import {
  postCss,
  baseConfig,
  loaders,
  output,
  plugins,
} from './webpack.config.babel';


const additionalBaseConfigs = {
   externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  }
};

const devPlugins = [
  new CleanPlugin('./dist', {
    root: path.resolve('./')
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.IgnorePlugin(/\.\/dev/, /\/config$/),

  new ExtractTextPlugin('[name].css', {
    allChunks: true
  }),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      unused: true,
      dead_code: true,
      warnings: false
    }
  }),
  new CopyWebpackPlugin([
    {from: 'src'}
  ]),
];
new ExtractTextPlugin('[name].css', {
  allChunks: true
});

const additionalLoaders = {
  jsx: {
    loaders: [WebpackStrip.loader('debug', 'console.log'), 'babel']
  },
  css: {
    loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'),
  },
};

const webpackConfig = baseConfig(additionalBaseConfigs);

webpackConfig.postcss = postCss(webpack);
webpackConfig.plugins = plugins(devPlugins);
webpackConfig.module.loaders = loaders(additionalLoaders);

webpackConfig.output = output();

// ------------------------------------
// Entry Points
// ------------------------------------
webpackConfig.entry = {
  bundle: [`./src/index.js`],
  example: [`./example/index.js`],
};

export default webpackConfig;
