import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Modal from 'react-modal';
import Navigation from './Navigation';
import Caption from './Caption';

const styles = require('../styles/lightbox.css');

const PREV_KEY = 37;
const NEXT_KEY = 39;
const ESC_KEY = 27;
const KEYDOWN = 'keydown';

const MODAL_STYLE = {
  overlay: {
    zIndex: 1000,
    backgroundColor: 'transparent',
  },
  content: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
    border: 'none',
    borderRadius: 0,
    padding: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1,
  },
};

class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen && this.props.enableKeyboardInput) {
      window.addEventListener(KEYDOWN, this.handleKeydown);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.preloadNextImage) {
      const nextIndex = nextProps.imageIndex + 1;
      const prevIndex = nextProps.imageIndex - 1;

      this.preloadImage(prevIndex);
      this.preloadImage(nextIndex);
    }

    if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.addEventListener(KEYDOWN, this.handleKeydown);
    }
    if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.removeEventListener(KEYDOWN, this.handleKeydown);
    }
  }

  componentWillUnmount() {
    if (this.props.enableKeyboardInput) {
      window.removeEventListener(KEYDOWN, this.handleKeydown);
    }
  }

  preloadImage(index) {
    const image = this.props.images[index];

    if (!image) return;

    const img = new Image();

    img.src = image.src;
  }

  handleNext(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.props.onClickNext();
  }

  handlePrev(event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.props.onClickPrev();
  }

  handleKeydown(event) {
    switch (event.keyCode) {
      case PREV_KEY:
        this.handlePrev(event);
        return true;
      case NEXT_KEY:
        this.handleNext(event);
        return true;
      case ESC_KEY:
        this.props.onClose();
        return true;
      default:
        return false;
    }
  }

  renderImages() {
    const {
      imageIndex,
      images,
      showCaption
    } = this.props;

    if (!images || !images.length) return null;

    const image = images[imageIndex];

    return (
      <figure>
        <img
          styleName="image"
          alt={image.alt}
          src={image.src}
        />
        {!!showCaption && <Caption
          body={image.caption}
          index={imageIndex + 1}
          total={images.length}
        />}
      </figure>
    );
  }

  render() {
    const {
      closeOnClick,
      isOpen,
      onClose,
    } = this.props;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return (
      <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          style={MODAL_STYLE}
          contentLabel="Lightbox"
        >
          <div styleName="outer">
            <div styleName="inner" onClick={!!closeOnClick && onClose}>
              <Navigation
                handleNext={this.handleNext}
                handlePrev={this.handlePrev}
                onClose={onClose}
              />
              {this.renderImages()}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

Lightbox.defaultProps = {
  closeOnClick: false,
  enableKeyboardInput: true,
  imageIndex: 0,
  images: [],
  isOpen: false,
  preloadNextImage: true,
  showCaption: false,
};

Lightbox.propTypes = {
  closeOnClick: PropTypes.bool,
  enableKeyboardInput: PropTypes.bool,
  imageIndex: PropTypes.number,
  images: PropTypes.array.isRequired,
  isOpen: PropTypes.bool,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onClose: PropTypes.func,
  preloadNextImage: PropTypes.bool,
  showCaption: PropTypes.bool,
};

export default cssModules(Lightbox, styles);
