import * as React from 'react'
import * as PropTypes from 'prop-types'
import Lightbox from '~/components/Lightbox'

interface LightboxProviderProps {}
interface LightboxProviderState {
  isOpen: boolean
  lightboxProps: object | null
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
    lightboxProps: null,
  }

  getChildContext() {
    return {
      lightbox: {
        open: this._open,
      },
    }
  }

  private _open = (props?: object) => {
    this.setState({ isOpen: true, lightboxProps: props || null })
  }

  private _close = () => {
    this.setState({ isOpen: false, lightboxProps: null })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isOpen && (
          <Lightbox {...this.state.lightboxProps} onClose={this._close} />
        )}
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default LightboxProvider
