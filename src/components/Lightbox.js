import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Modal from 'react-modal';
import Button from './Button';

const styles = require('../styles/lightbox.css');

const PREV_KEY = 37;
const NEXT_KEY = 39;
const ESC_KEY = 27;

class Lightbox extends Component {
  constructor(props) {
    super(props);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount () {
    if (this.props.isOpen && this.props.enableKeyboardInput) {
      window.addEventListener('keydown', this.handleKeydown);
    }
  }

  componentWillReceiveProps (nextProps) {

    if (nextProps.preloadNextImage) {
      const nextIndex = nextProps.imageIndex + 1;
      const prevIndex = nextProps.imageIndex - 1;

      this.preloadImage(prevIndex);
      this.preloadImage(nextIndex);
    }

    if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.addEventListener('keydown', this.handleKeydown);
    }
    if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
      window.removeEventListener('keydown', this.handleKeydown);
    }
  }

  componentWillUnmount () {
    if (this.props.enableKeyboardInput) {
      window.removeEventListener('keydown', this.handleKeydown);
    }
  }

  preloadImage (index) {
    const image = this.props.images[index];

    if (!image) return;

    const img = new Image();

    img.src = image.src;
  }

  handleNext (event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.props.onClickNext();
  }

  handlePrev (event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    this.props.onClickPrev();
  }

  handleKeydown (event) {
    switch(event.keyCode) {
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

  renderImages () {
    const {
      imageIndex,
      images,
    } = this.props;

    if (!images || !images.length) return null;

    const image = images[imageIndex];

    return (
      <figure>
        <img
          styleName='image'
          alt={image.alt}
          src={image.src}
        />
        <div styleName="caption">
          <div styleName="caption-content">
            <div styleName="caption-body">{image.caption}</div>
            <div styleName="photo-count">{imageIndex + 1} of {images.length}</div>
          </div>
        </div>
      </figure>
    );
  }

  render() {
    const {
      closeOnClick,
      isOpen,
      onClose,
    } = this.props;

    const modalStyle = {
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

    return (
      <div styleName="lightbox">
        <Modal
          isOpen={isOpen}
          onRequestClose={onClose}
          style={modalStyle}
          contentLabel='Lightbox'
        >
          <div styleName="outer">
            <div styleName="inner"  onClick={!!closeOnClick && onClose}>
              <div styleName="navigation">
                <Button label="X" onClick={onClose} />
                <Button label="< Prev" type="" onClick={this.handlePrev} />
                <Button label="Next >" type="" onClick={this.handleNext} />
              </div>
              {this.renderImages()}
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

Lightbox.defaultProps = {
  imageIndex: 0,
  enableKeyboardInput: true,
  preloadNextImage: true,
  closeOnClick: false,
};

Lightbox.propTypes = {

};

export default cssModules(Lightbox, styles);
