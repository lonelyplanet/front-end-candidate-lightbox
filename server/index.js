const path = require('path')
const express = require('express')

const app = express()

if (process.env.NODE_ENV === 'development') {
  const webpackConfig = require('../webpack.config')
  app.use(require('./middleware/hmr')(webpackConfig))
} else {
  // NOTE(zuko): for now we are just serving the contents of `/dist` as if we
  // were a simple web server. We could implement server-side rendering here
  // if required, though.
  app.use(express.static(path.resolve(__dirname, '../dist')))
}

module.exports = app
