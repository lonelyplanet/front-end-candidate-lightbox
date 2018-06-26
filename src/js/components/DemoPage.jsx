import React, { Component } from 'react';
import _range from 'lodash/range';

import Lightbox from '@/js/components/Lightbox';


const someImages = [
  'http://www.worthproperties.com/wp-content/uploads/2017/02/The-Gulch-1.jpg',
  'http://minimini.jp/bookimg/rosen/2199_120_2.jpg',
  'http://lb.ebpark.jp/upload/book_data/T01211/books/images/2/1.jpg',
  'https://ostromworkshop.indiana.edu/images/samplegates_1800x600.jpg',
];

const loremText = `Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut
labore et dolore magna aliqua.
Vel quam elementum pulvinar etiam non.
Neque vitae tempus quam pellentesque nec nam aliquam sem et.
Adipiscing elit duis tristique sollicitudin.
Quam lacus suspendisse faucibus interdum posuere lorem.
Sagittis aliquam malesuada bibendum arcu vitae
elementum curabitur vitae nunc.
Ultricies leo integer malesuada nunc vel risus.
Eget nunc scelerisque viverra mauris in aliquam sem.
Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt.
Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.`;

const loremSection = _range(3).map(i => (
  <p key={i}>
    {loremText}
  </p>
));


class DemoPage extends Component {
  constructor() {
    super();
    this.state = {
      lightboxIsOpen: false,
    };
    this.handleLightboxOpen = this.handleLightboxOpen.bind(this);
    this.handleLightboxClose = this.handleLightboxClose.bind(this);
  }

  handleLightboxOpen(e) {
    e.preventDefault();
    this.setState({
      lightboxIsOpen: true,
    });
  }

  handleLightboxClose() {
    this.setState({
      lightboxIsOpen: false,
    });
  }

  render() {
    const { lightboxIsOpen } = this.state;

    return (
      <div className="container">
        {loremSection}
        <a
          href="http://www.lonelyplanet.com/"
          className="button js-lightbox-opener"
          onClick={this.handleLightboxOpen}
        >
          open lightbox
        </a>
        {loremSection}
        <Lightbox
          isOpen={lightboxIsOpen}
          onClose={this.handleLightboxClose}
          imageSrcs={someImages}
        />
      </div>
    );
  }
}

export default DemoPage;
