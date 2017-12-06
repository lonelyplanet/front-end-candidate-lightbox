import * as React from 'react'
import * as PropTypes from 'prop-types'
import Lightbox, { LightboxProps } from '~/components/Lightbox'

interface LightboxProviderProps {}
interface LightboxProviderState {
  isOpen: boolean
  lightboxProps: Partial<LightboxProps> | null
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
        openAsync: this._openAsync,
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
        ...opts,
      },
    })
  }

  private _openAsync = async (
    getImage: () => { src: string; title?: string; description?: string },
  ) => {
    // We open the lightbox before the request completes so that the user sees
    // a loading state. The Lightbox component only cares about the loading
    // state of the image itself and not any additional requests.
    this.setState({ isOpen: true })
    const { src, title, description } = await getImage()

    // Don't re-open the lightbox if the user has closed it.
    if (this.state.isOpen) {
      this.setState({
        lightboxProps: {
          imageSrc: src,
          title,
          description,
        },
      })
    }
  }

  private _close = () => {
    this.setState({ isOpen: false, lightboxProps: null })
  }

  render() {
    const { isOpen, lightboxProps } = this.state
    return (
      <React.Fragment>
        {isOpen && (
          <Lightbox {...lightboxProps as LightboxProps} onClose={this._close} />
        )}
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default LightboxProvider
