const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const __DEV__ = process.env.NODE_ENV === 'development'
const __PROD__ = process.env.NODE_ENV === 'production'

const extractStyles = new ExtractTextPlugin({
  filename: 'styles/[name].[contenthash].css',
  allChunks: true,
  disable: __DEV__,
})

const webpackConfig = {
  entry: {
    main: [path.resolve(__dirname, 'src/index')],
    vendor: [
      'classnames',
      'prop-types',
      'react',
      'react-dom',
    ],
  },
  target: 'web',
  devtool: __DEV__ ? 'cheap-module-eval-source-map' : 'source-map',
  performance: {
    hints: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'awesome-typescript-loader',
          query: {
            useCache: true,
            transpileOnly: false,
            silent: true,
          },
        }],
      },
      {
        test: /\.(sass|scss)$/,
        loader: extractStyles.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                minimize: {
                  autoprefixer: {
                    add: true,
                    remove: true,
                    browsers: ['last 2 versions'],
                  },
                  discardComments: {
                    removeAll: true,
                  },
                  discardUnused: false,
                  mergeIdents: false,
                  reduceIdents: false,
                  safe: true,
                  sourcemap: true,
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths: [
                  path.resolve(__dirname, 'src/styles'),
                ],
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    extractStyles,
    new webpack.DefinePlugin({
      __DEV__,
      __PROD__,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      title: 'React Lightbox Exercise',
      inject: true,
      chunksSortMode: 'dependency',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        collapseWhitespace: true,
      },
    }),
  ],
}

if (__PROD__) {
  const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({ names: ['manifest', 'vendor'] }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
    })
  )
}

module.exports = webpackConfig
