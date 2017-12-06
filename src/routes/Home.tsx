import * as React from 'react'
import * as PropTypes from 'prop-types'

interface HomeProps {}
class Home extends React.Component<HomeProps> {
  static contextTypes = {
    lightbox: PropTypes.object,
  }

  _onShowDemoLightbox = () => {
    this.context.lightbox.open()
  }

  render() {
    return (
      <div>
        <h1>Hello Lonely Planet</h1>
        <button onClick={this._onShowDemoLightbox}>Open Demo Lightbox</button>
      </div>
    )
  }
}

export default Home
