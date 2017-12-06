import * as React from 'react'

interface LightboxProps {
  onClose: () => any
}
class Lightbox extends React.Component<LightboxProps> {
  componentDidMount () {
    document.body.classList.add('lightbox-open')
  }

  componentWillUnmount () {
    document.body.classList.remove('lightbox-open')
  }

  render () {
    const { onClose } = this.props

    return (
      <div className='lightbox-wrapper'>
        <div className='lightbox'>
          <h2>I'm a Lightbox</h2>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    )
  }
}

export default Lightbox
