import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

const styles = require('../styles/lightbox.css');

const Caption = props => (
  <div styleName="caption">
    <div styleName="caption-content">
      <div styleName="caption-body" id="body">{props.body}</div>
      <div styleName="photo-count" id="count">{props.index} of {props.total}</div>
    </div>
  </div>
);

Caption.defaultProps = {
  body: '',
  index: 0,
  total: 0,
};

Caption.propTypes = {
  body: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default cssModules(Caption, styles);
