'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactDOM = require('react-dom');
var Container = require('./Container');

module.exports = React.createClass({
  displayName: 'Lightbox',
  propTypes: {
    images: React.PropTypes.arrayOf(React.PropTypes.shape({
      src: React.PropTypes.string.isRequired,
      title: React.PropTypes.string,
      description: React.PropTypes.string,
      thumbnail: React.PropTypes.string
    })).isRequired,
    showImageModifiers: React.PropTypes.bool,
    thumbnailWidth: React.PropTypes.string,
    thumbnailHeight: React.PropTypes.string,
    renderImageFunc: React.PropTypes.func,
    renderDescriptionFunc: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      showImageModifiers: true,
      thumbnailWidth: '80px',
      thumbnailHeight: '80px',
      renderImageFunc: function renderImageFunc(idx, image, toggleLightbox, width, height) {
        return React.createElement('img', {
          key: idx,
          src: !!image.thumbnail ? image.thumbnail : image.src,
          className: 'lightbox-img-thumbnail',
          style: { width: width, height: height },
          alt: image.title,
          onClick: toggleLightbox.bind(null, idx) });
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      showLightbox: false,
      selectedImage: 0
    };
  },
  toggleLightbox: function toggleLightbox(idx) {
    this.setState({
      showLightbox: !this.state.showLightbox,
      selectedImage: idx
    });
  },
  render: function render() {
    var _this = this;

    var props = this.props;
    var images = props.images.map(function (image, idx) {
      return props.renderImageFunc.call(_this, idx, image, _this.toggleLightbox, props.thumbnailWidth, props.thumbnailHeight);
    });
    var container = undefined;
    if (this.state.showLightbox) container = React.createElement(Container, _extends({}, this.props, {
      toggleLightbox: this.toggleLightbox,
      selectedImage: this.state.selectedImage }));

    return React.createElement(
      'div',
      { className: 'lightbox-container' },
      images,
      container
    );
  }
});