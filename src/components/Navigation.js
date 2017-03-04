import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Button from './Button';

const styles = require('../styles/lightbox.css');

const Navigation = props => (
  <div styleName="navigation">
    <Button label={props.closeLabel} onClick={props.onClose} />
    <Button label={props.prevLabel} onClick={props.handlePrev} />
    <Button label={props.nextLabel} onClick={props.handleNext} />
  </div>
);

Navigation.defaultProps = {
  closeLabel: 'X',
  nextLabel: 'Next >',
  prevLabel: '< Prev',
};

Navigation.propTypes = {
  closeLabel: PropTypes.string,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
  nextLabel: PropTypes.string,
  onClose: PropTypes.func,
  prevLabel: PropTypes.string,
};

export default cssModules(Navigation, styles);
