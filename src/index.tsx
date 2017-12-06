import * as React from 'react'
import * as ReactDOM from 'react-dom'
import '~/styles/main.scss'

// Rendering
// ----------------------------------------
const mountApplication = () => {
  const App = require('~/components/App').default
  ReactDOM.render(<App />, document.getElementById('root')!)
}

// Developer Tools
// ----------------------------------------
if (__DEV__) {
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root')!)
        mountApplication()
      })
    })
  }
}

// Application Initialization
// ----------------------------------------
;(function init() {
  mountApplication()
})()
