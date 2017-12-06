const path = require('path')
const express = require('express')

const app = express()

if (process.env.NODE_ENV === 'development') {
  const webpackConfig = require('../webpack.config')
  app.use(require('./middleware/hmr')(webpackConfig))
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')))
}

// prettier-disable
const MOCK_IMAGES = [
  { size: 'small', src: 'http://www.themistermen.co.uk/images/Mr_Small.jpg', title: 'A Small Image', description: 'A sample description for this image' },
  { size: 'medium', src: 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg', title: 'A Medium Image', description: 'A sample description for this image' },
  { size: 'large', src: 'https://images7.alphacoders.com/671/671281.jpg', title: 'A Large Image', description: 'A sample description for this image' },
]

app.get('/api/random-image', (req, res, next) => {
  Promise.resolve()
    .then(() => new Promise(res => setTimeout(res, 1000)))
    .then(() => MOCK_IMAGES[Math.floor(Math.random() * MOCK_IMAGES.length)])
    .then(image => res.json(image))
})

module.exports = app
