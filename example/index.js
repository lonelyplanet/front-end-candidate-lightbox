
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'components/Lightbox';
import Button from 'components/Button';

const dest = document.getElementById('content');


class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: 0,
      isOpen: false
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    debugger
    this.setState({ isOpen: true });
  }

  render() {
    const {
      photo,
      isOpen,
    } = this.state;

    return (
      <div>
        <Button
          label="Open Lightbox"
          onClick={this.onButtonClick}
        />
        <Lightbox
          isOpen={isOpen}
        />

      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <LightboxExample />
  </div>,
  dest
);

window.React = React; // enable debugger
