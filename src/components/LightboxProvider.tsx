import * as React from 'react'
import * as PropTypes from 'prop-types'
import Lightbox, { LightboxProps } from '~/components/Lightbox'

interface LightboxProviderProps {}
interface LightboxProviderState {
  isOpen: boolean
  lightboxProps: LightboxProps | null
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

  private _open = (
    imageSrc: string,
    opts?: {
      title?: string
      description?: string
    },
  ) => {
    this.setState({
      isOpen: true,
      lightboxProps: {
        imageSrc,
        onClose: this._close,
        ...opts,
      },
    })
  }

  private _close = () => {
    this.setState({ isOpen: false, lightboxProps: null })
  }

  render() {
    const { isOpen, lightboxProps } = this.state

    return (
      <React.Fragment>
        {isOpen && <Lightbox {...lightboxProps!} />}
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default LightboxProvider
