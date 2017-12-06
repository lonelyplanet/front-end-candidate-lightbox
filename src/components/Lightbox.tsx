import * as React from 'react'
import * as cx from 'classnames'

export interface LightboxProps {
  onClose: () => any
  imageSrc: string
  title?: string
  description?: string
}
interface LightboxState {
  isLoading: boolean
  transition: 'enter' | 'leave' | null
}
class Lightbox extends React.Component<LightboxProps> {
  /** Ref to the lightbox DOM node */
  _lightbox: HTMLDivElement | null

  state: LightboxState = {
    // NOTE(zuko): brief point of discussion: We could set this to `false` as
    // the sane initial value and then immediately change it to `true` in
    // `componentWillMount` (or the constructor), but re: `componentWillMount`
    // I've heard a lot of discussion about that particularl lifecycle event
    // potentially being fired more than once per component instance once React
    // enables asynchronous rendering with Fiber. In that case, we would not
    // want one-time initialization logic run multiple times, and I'm not yet
    // convinced that it's better to move it to the constructor.
    //
    // For simplicity's sake I could just do what has been described in the
    // comment above, but lately I've been trying to future-proof my React
    // code and felt it warranted noting. I could very well wrong in this.
    isLoading: true,
    transition: 'enter',
  }

  componentDidMount() {
    document.body.classList.add('lightbox-open')
    document.addEventListener('click', this._checkForOutsideClick)
    document.addEventListener('keydown', this._checkKeydownEvent)
  }

  componentWillUnmount() {
    document.body.classList.remove('lightbox-open')
    document.removeEventListener('click', this._checkForOutsideClick)
    document.removeEventListener('keydown', this._checkKeydownEvent)
  }

  /**
   * Handles all click events that bubble up to the document root. If the
   * click event did not originate from within the lightbox, then we treat
   * that as an intent to close the lightbox.
   */
  private _checkForOutsideClick = (e: any) => {
    if (this._lightbox && !this._lightbox.contains(e.target)) {
      this._onClose()
    }
  }

  /**
   * Handles all keydown events that bubble up to the document root. If the
   * Escape key is pressed, close the lightbox.
   */
  private _checkKeydownEvent = (e: any) => {
    switch (e.key) {
      case 'Escape':
        this._onClose()
        break
      default:
      // noop
    }
  }

  private _onClose = () => {
    if (this.state.transition === 'leave') return

    this.setState({ transition: 'leave' }, () => {
      // Wait for the hide animation to complete. This is unfortunate coupling
      // between the component and its CSS, since we have to keep the animation
      // durations consistent. This could likely be improved by either setting
      // the animation duration directly from the JS or by incorporating more
      // modern CSS-in-JS solutions. For now, I'm just keeping it simple.
      setTimeout(() => {
        this.props.onClose()
      }, 250)
    })
    this._onClose()
  }

  private _onLightboxRef = (node: HTMLDivElement) => {
    this._lightbox = node
  }

  private _onImageLoad = () => {
    this.setState({ isLoading: false })
  }

  renderLoader() {
    return (
      <div className='lightbox__loader'>
        <h2>Loading</h2>
      </div>
    )
  }

  render() {
    const { imageSrc, title, description, onClose } = this.props
    const { isLoading, transition } = this.state

    return (
      <div
        className={cx('lightbox-wrapper', {
          'lightbox-wrapper--enter': transition === 'enter',
          'lightbox-wrapper--leave': transition === 'leave',
        })}
      >
        <div className="lightbox" ref={this._onLightboxRef}>
          <div className="lightbox__content">
            {isLoading && this.renderLoader()}
            <img
              className="lightbox__image"
              src={imageSrc}
              onLoad={this._onImageLoad}
              hidden={isLoading}
            />
            {(title || description) && (
              <div className="lightbox__footer">
                {title && <h3 className="lightbox__title">{title}</h3>}
                {description && (
                  <p className="lightbox__description">{description}</p>
                )}
              </div>
            )}
          </div>
          <button className="lightbox__close" onClick={onClose}>
            <span aria-hidden>&times;</span>
          </button>
        </div>
      </div>
    )
  }
}

export default Lightbox
