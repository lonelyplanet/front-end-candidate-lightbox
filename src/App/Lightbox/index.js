import React, { Component } from 'react'
import 'whatwg-fetch'
import './index.scss'

const API_KEY = 'MTgwNzAw'

class Lightbox extends Component {
  constructor (props) {
    super(props)

    this.state = { url: '', loading: false, error: '' }

    this.handleKeydown = this.handleKeydown.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleCloseBtn = this.handleCloseBtn.bind(this)
  }

  componentWillMount () {
    this.setState({ loading: true })

    fetch(`http://thecatapi.com/api/images/get?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({ url: response.url, loading: false })
      })
      .catch(() => {
        this.setState({ loading: false, error: 'Unable to get a cat. Try again' })
      })

    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('click', this.handleClick);
  }

  handleClick (event) {
    if (event.target.className == 'lightbox') {
      this.props.onClose()
    }
  }

  handleCloseBtn (event) {
    event.preventDefault()
    this.props.onClose()
  }

  handleKeydown (event) {
    if (event.keyCode === 27) {
      this.props.onClose()
    }
  }

  render () {
    const loadingMessage = this.state.loading
      ? (<h3>Loading Cat…</h3>)
      : null

    const errorMessage = this.state.error
      ? (<h4>{this.state.error}</h4>)
      : null

    return (
      <div className='lightbox'>
        <div className='lightbox-content'>
          <img src={this.state.url} />
          {loadingMessage}
          {errorMessage}
          <a href className="button" onClick={this.handleCloseBtn}>Close</a>
        </div>
      </div>
    )
  }
}

export default Lightbox
