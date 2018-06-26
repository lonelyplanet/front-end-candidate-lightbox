import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styleVariables from '@/styles/exports.scss';
import '@/styles/lightbox.scss';

import {
  KEYCODE_ESC,
  KEYCODE_LEFT,
  KEYCODE_RIGHT,
  KEYCODE_DOWN,
  KEYCODE_UP,
  KEYCODE_SPACE,
} from '@/js/constants';


const imageFadeTime = parseInt(styleVariables.imageFadeTimeMs, 10);
const lightboxFadeTime = parseInt(styleVariables.lightboxFadeTimeMs, 10);


class Lightbox extends Component {
  constructor() {
    super();
    this.state = {
      isClosing: false,
      currentImageIndex: 0,
      showImage: false,
    };
    this.handleImageForward = this.handleImageForward.bind(this);
    this.handleImageBack = this.handleImageBack.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.setImageIndex = this.setImageIndex.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  setImageIndex({ index }) {
    this.setState({
      showImage: false,
    });
    setTimeout(
      this.setState.bind(this, {
        currentImageIndex: index,
      }), imageFadeTime,
      /**
       * Ultimately would be nicer to detect end of css transition animation via event listener,
       * perhaps using $refs to examine the <img> element.
       */
    );
  }

  handleImageBack() {
    const { imageSrcs } = this.props;
    const { currentImageIndex: i } = this.state;
    const previousIndex = (i + imageSrcs.length - 1) % imageSrcs.length;
    this.setImageIndex({ index: previousIndex });
  }

  handleImageForward() {
    const { imageSrcs } = this.props;
    const { currentImageIndex: i } = this.state;
    const nextIndex = (i + 1) % imageSrcs.length;
    this.setImageIndex({ index: nextIndex });
  }

  handleClose() {
    /**
     * "isClosing" state is solely to add a class to the lightbox
     * such that it'll fade out, after which we call the callback from the parent
     * which will presumably set the "isOpen" prop to false.
     * Side note: this would likely be handled in a container (wrapper) component
     * for the lightbox, which has not been implemented here.
     */
    const { onClose: closeCallbackFromParent } = this.props;
    this.setState({ isClosing: true });

    setTimeout(() => {
      this.setState({ isClosing: false });
      closeCallbackFromParent();
    }, lightboxFadeTime);
  }

  handleKeyUp(e) {
    /**
     * Close the lightbox if ESC is pressed,
     * and move through images with left/right arrow keys.
     */
    const { isOpen } = this.props;
    if (! isOpen) {
      return;
    }
    switch (e.keyCode) {
      case KEYCODE_ESC:
        this.handleClose(e);
        break;
      case KEYCODE_LEFT:
        this.handleImageBack();
        break;
      case KEYCODE_RIGHT:
        this.handleImageForward();
        break;
      default:
        // do nothing.
    }
  }

  handleKeyDown(e) {
    /**
     * Prevent scrolling with arrow keys & space bar.
     */
    const { isOpen } = this.props;
    if (! isOpen) {
      return;
    }
    switch (e.keyCode) {
      case KEYCODE_DOWN:
      case KEYCODE_UP:
      case KEYCODE_SPACE:
        e.preventDefault();
        break;
      default:
        // do nothing.
    }
  }

  handleImageLoaded() {
    this.setState({
      showImage: true,
    });
  }

  render() {
    const { isOpen, imageSrcs } = this.props;
    const { currentImageIndex, showImage, isClosing } = this.state;

    return (
      <div
        className={`lightbox${isOpen ? ' active' : ''}${isClosing ? ' is-closing' : ''}`}
        onClick={this.handleClose}
        role="presentation"
      >
        <div
          className="content"
          onClick={e => e.stopPropagation()}
          role="presentation"
        >
          <button
            className="close"
            onClick={this.handleClose}
            type="button"
          >
            x
          </button>
          <button
            className="previous"
            onClick={this.handleImageBack}
            type="button"
          >
            &lt;
          </button>
          <img
            alt=""
            className={showImage ? 'active' : ''}
            src={imageSrcs[currentImageIndex]}
            onLoad={this.handleImageLoaded}
          />
          <button
            className="next"
            onClick={this.handleImageForward}
            type="button"
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

/**
 * As an aside, I like Flow for typechecking and I
 * believe that TypeScript is in use at Lonely Planet,
 * but in the interest of time I'll leave this at propTypes.
 */

Lightbox.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  imageSrcs: PropTypes.arrayOf(PropTypes.string),
};

Lightbox.defaultProps = {
  onClose: () => {},
  isOpen: false,
  imageSrcs: [],
};

export default Lightbox;
