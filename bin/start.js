// NOTE(zuko): We are intentionally assigning over `process.env` in order to
// set default values. This script is the entry point to the application, so it
// is the only time `process.env` is not treated as read-only.
const { HOST, PORT } = process.env = Object.assign({
  NODE_ENV: 'development',
  HOST: 'localhost',
  PORT: 3000,
}, process.env)

require('../server').listen(PORT, HOST, () => {
  console.info(`Server running on http://${HOST}:${PORT}`)
})
