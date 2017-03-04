import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config.babel';

const SERVER_PORT = 3000;

const compiler = webpack(webpackConfig);
const app = express();

const serverOptions = {
  contentBase: 'src',
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true}
};

const middleware = webpackMiddleware(compiler, serverOptions);

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.listen(SERVER_PORT, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', SERVER_PORT);
  }
});
