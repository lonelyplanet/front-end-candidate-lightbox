'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
  displayName: 'Image',
  propTypes: {
    handleRotate: React.PropTypes.func.isRequired,
    handleZoom: React.PropTypes.func.isRequired,
    currentImage: React.PropTypes.string.isRequired
  },
  handleRotateClockwise: function handleRotateClockwise() {
    this.props.handleRotate.call(this, 90);
  },
  handleRotateCounterclockwise: function handleRotateCounterclockwise() {
    this.props.handleRotate.call(this, -90);
  },
  handleZoomIn: function handleZoomIn() {
    this.props.handleZoom.call(this, 1, 10);
  },
  handleZoomOut: function handleZoomOut() {
    this.props.handleZoom.call(this, -1, 10);
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'lightbox-modifiers-box' },
      React.createElement(
        'button',
        { className: 'lightbox-btn', onClick: this.handleZoomIn },
        React.createElement('i', { className: 'fa fa-search-plus' })
      ),
      React.createElement(
        'button',
        { className: 'lightbox-btn', onClick: this.handleZoomOut },
        React.createElement('i', { className: 'fa fa-search-minus' })
      ),
      React.createElement(
        'button',
        { className: 'lightbox-btn', onClick: this.handleRotateCounterclockwise },
        React.createElement('i', { className: 'fa fa-rotate-left' })
      ),
      React.createElement(
        'button',
        { className: 'lightbox-btn', onClick: this.handleRotateClockwise },
        React.createElement('i', { className: 'fa fa-rotate-right' })
      ),
      React.createElement(
        'a',
        { className: 'lightbox-btn a-padding', download: true, href: this.props.currentImage },
        React.createElement('i', { className: 'fa fa-download' })
      )
    );
  }
});