
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'components/Lightbox';
import Button from 'components/Button';

import image1 from 'images/cute-puppy.jpg';
import image2 from 'images/pug.jpg';
import image3 from 'images/pupper.jpg';
import image4 from 'images/butterfly-pup.jpg';
import image5 from 'images/disguise-dog.jpg';
import image6 from 'images/doggo.jpg';

const images = [{
  src: image1,
  caption: 'Look at this cute tea-pup!',
}, {
  src: image2,
  caption: 'I\'m a snug little pug',
}, {
  src: image3,
  caption: 'Can you not?',
}, {
  src: image4,
  caption: 'Ugh. Mom. No.',
}, {
  src: image5,
  caption: 'Going undercover to figure out who\'s a good boy',
}, {
  src: image6,
  caption: 'Did I hear a cheese wrapper?',
}];

const dest = document.getElementById('content');

class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0,
      isOpen: false
    };

    this.onOpenClick = this.onOpenClick.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
  }

  onOpenClick() {
    this.setState({ isOpen: true });
  }

  onClickNext() {
    this.setState({ imageIndex: (this.state.imageIndex + 1) % images.length });
  }

  onClickPrev() {
    this.setState({ imageIndex: (this.state.imageIndex + images.length - 1) % images.length });
  }

  closeLightbox() {
    this.setState({ isOpen: false });
  }

  render() {
    const {
      imageIndex,
      isOpen,

    } = this.state;

    return (
      <div>
        <Button
          label="Open Lightbox"
          onClick={this.onOpenClick}
        />
        <Lightbox
          isOpen={isOpen}
          onClose={this.closeLightbox}
          images={images}
          onClickNext={this.onClickNext}
          onClickPrev={this.onClickPrev}
          imageIndex={imageIndex}
          showCaption
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
