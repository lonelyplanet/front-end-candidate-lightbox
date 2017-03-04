import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

const styles = require('../styles/lightbox.css');

const Lightbox = props => (
  <li>
    <span>{props.label}</span>
  </li>
);

Lightbox.defaultProps = {
  label: '',
};

Lightbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default cssModules(Lightbox, styles);
