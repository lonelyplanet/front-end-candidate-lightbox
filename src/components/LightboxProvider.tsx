import * as React from 'react'
import * as PropTypes from 'prop-types'
import Lightbox from '~/components/Lightbox'

interface LightboxProviderProps {}
interface LightboxProviderState {
  isOpen: boolean
  imageSrc: string | null
}
class LightboxProvider extends React.Component<
  LightboxProviderProps,
  LightboxProviderState
> {
  static childContextTypes = {
    lightbox: PropTypes.shape({
      open: PropTypes.func,
    }),
  }

  state: LightboxProviderState = {
    isOpen: false,
    imageSrc: null,
  }

  getChildContext() {
    return {
      lightbox: {
        open: this._open,
      },
    }
  }

  private _open = (imageSrc: string) => {
    this.setState({
      isOpen: true,
      imageSrc,
    })
  }

  private _close = () => {
    this.setState({ isOpen: false, imageSrc: null })
  }

  render() {
    const { isOpen, imageSrc } = this.state

    return (
      <React.Fragment>
        {isOpen && <Lightbox imageSrc={imageSrc!} onClose={this._close} />}
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default LightboxProvider
