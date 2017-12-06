import * as React from 'react'
import * as PropTypes from 'prop-types'

interface HomeProps {}
class Home extends React.Component<HomeProps> {
  static contextTypes = {
    lightbox: PropTypes.object,
  }

  _onShowDemoLightbox = () => {
    const IMAGE =
      'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg'
    this.context.lightbox.open(IMAGE, {
      title: 'Sample image title goes here',
      description: 'Here is a longer description that describes this image.',
    })
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
