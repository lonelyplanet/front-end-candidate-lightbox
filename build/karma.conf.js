var webpack = require('webpack');

module.exports = function(config) {
  config.set({

    browsers: ['PhantomJS'],

    singleRun: true,

    frameworks: [ 'mocha' ],

    files: [
      '../node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },

    reporters: [ 'mocha' ],

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-sinon'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader')
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, exclude: [/node_modules\/(?!dv-*)/], loaders: ['babel']},
          { test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader'}
        ]
      },
      resolve: {
        modulesDirectories: [
          'src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js']
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      postcss: function(webpack) {
        return [];
      },
      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
      ]
    },

    webpackServer: {
      noInfo: true
    }

  });
};
