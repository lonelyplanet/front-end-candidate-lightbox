import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Modal from 'react-modal';

const styles = require('../styles/lightbox.css');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Lightbox extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { isOpen } = this.props;
    const noop = () => {};

    return (
      <div styleName="lightbox">
        <Modal
          isOpen={isOpen}
          onRequestClose={noop}
          onAfterOpen={() => this.outerEl && this.outerEl.focus()}
          style={customStyles}
        >
          <div>I am a modal!!!</div>
        </Modal>
      </div>
    );
  }
}

Lightbox.defaultProps = {

};

Lightbox.propTypes = {

};

export default cssModules(Lightbox, styles);
