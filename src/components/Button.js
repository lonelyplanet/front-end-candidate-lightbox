import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

const styles = require('../styles/lightbox.css');

const Button = props => (
  <button
    styleName="button"
    onClick={props.onClick}
    id={props.id}
    disabled={props.disabled}
  >
      {props.label}
  </button>
);

Button.defaultProps = {
  label: '',
  type: 'button',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
};

export default cssModules(Button, styles);
