
import React from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'components/Lightbox';

const dest = document.getElementById('content');

ReactDOM.render(
  <div>
    <Lightbox />
  </div>,
  dest
);

window.React = React; // enable debugger
