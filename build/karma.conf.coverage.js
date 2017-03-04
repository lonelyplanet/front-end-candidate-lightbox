
var webpack = require('webpack');
var path = require('path');

module.exports = function(config) {
  config.set({

    browsers: ['PhantomJS'],
    singleRun: !!process.env.CONTINUOUS_INTEGRATION,
    frameworks: ['mocha'],

    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],

    },

    reporters: ['mocha', 'coverage'],

    plugins: [
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-coverage',
      'karma-mocha-reporter',
      'karma-phantomjs-launcher',
    ],
    webpack: {
      devtool: 'inline-source-map',
      isparta: {
        embedSource: true,
        noAutoWrap: true,
      },
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: [
              path.resolve('src/'),
              path.resolve('node_modules/')
            ],
            loader: 'babel-loader'
          },
          {
            test: /\.js$/,
            include: path.resolve('src/'),
            loader: 'isparta'
          }
        ],
        loaders: [
          { test: /\.js$/,
            include: [
              /node_modules\/dv-*/,
              path.resolve('./src'),
  ]

          , loaders: ['babel-loader']},
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'
          },          {
            test: /\.json$/,
            loader: 'json',
          },
          {
             test: /\.(jpg|png)$/,
             loader: 'file-loader?name=src/images/[name].[ext]',
           },
        ],
        noParse: [
          /node_modules\/sinon\//,
        ],
      },
      resolve: {
        root: '../src',
        modulesDirectories: [
          'src',
          'node_modules'
        ],
        alias: {
          'sinon': 'sinon/pkg/sinon'
        },
      },
      externals: {
        jsdom: 'window',
        cheerio: 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
        'react/addons': true,
        'text-encoding': 'window'
      },
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      dir: '../coverage/',
      reporters: [{
        type: 'html',
        subdir: 'report-html',
      },
      {
        type: 'cobertura',
        subdir: '.',
        file: 'jenkins.txt'
      },
      {
        type: 'text'
      }],
      instrumenters: { isparta : require('isparta') },
      instrumenter: {
        'tests.webpack.js': 'isparta'
      }
    },
  });
};
