import React, { Component } from 'react'
import Lightbox from './Lightbox'
import './index.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = { lightboxOpen: false }

    this.openLightbox = this.openLightbox.bind(this)
    this.closeLightbox = this.closeLightbox.bind(this)
  }

  openLightbox () {
    this.setState({ lightboxOpen: true })
  }

  closeLightbox () {
    this.setState({ lightboxOpen: false })
  }

  renderLightbox () {
    if (this.state.lightboxOpen) {
      return <Lightbox onClose={this.closeLightbox} />
    }
  }

  render () {
    return (
      <div>
        <a href='#' className='button' onClick={this.openLightbox}>open lightbox</a>
        {this.renderLightbox()}
      </div>
    )
  }
}

export default App
