
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'components/Lightbox';
import Button from 'components/Button';
import axios from 'axios';
import _ from 'lodash';
import Loader from 'react-loader';

const dest = document.getElementById('content');

const API_URL = 'https://api.shutterstock.com/v2/images/search?per_page=10';
const CLIENT_ID = 'b775e1fad6e0be56e8af';
const CLIENT_SECRET = '1f68fe2a3e30913467a32acb94237711caabae1c';

const DEFAULT_STATE = Object.assign({}, {
  disabled: true,
  images: [],
  imageIndex: 0,
  isOpen: false,
  loading: false,
});

class LightboxExample extends Component {
  constructor(props) {
    super(props);

    this.state = DEFAULT_STATE;

    this.onOpenClick = this.onOpenClick.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.onClickPrev = this.onClickPrev.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onOpenClick() {
    this.setState({ loading: true });

    const searchInput = document.getElementById('search');
    const searchTerm = searchInput.value;

    this.fetchImages(searchTerm);
  }

  onClickNext() {
    const { images } = this.state;

    this.setState({ imageIndex: (this.state.imageIndex + 1) % images.length });
  }

  onClickPrev() {
    const { images } = this.state;

    this.setState({ imageIndex: (this.state.imageIndex + images.length - 1) % images.length });
  }

  onInputChange(evt) {
    if (evt.target.value) {
      this.setState({ disabled: false });
    }
  }

  closeLightbox() {
    this.setState({ isOpen: false, disabled: true });
  }

  formatImageArray(data) {
    const images = [];

    _.forEach(data, (img) => {
      const imgData = {
        src: img.assets.preview.url,
        caption: img.description,
      };

      images.push(imgData);
    });


    this.setState({
      images,
      imageIndex: 0,
      isOpen: images.length > 0,
      loading: false,
      noResults: images.length === 0,
    });
  }

  fetchImages(searchTerm) {
    const encodedKey = window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const authorization = `Basic ${encodedKey}`;

    axios.get(`${API_URL}&query=${searchTerm}`, {
      headers: {
        Authorization: authorization
      }
    }).then(result => {
      this.formatImageArray(result.data.data);
    }).catch(() => {
      this.setState(DEFAULT_STATE);
    });
  }

  renderLoader() {
    const options = {
      length: 40,
      lines: 13,
      width: 10,
      radius: 40,
      color: '#000',
      speed: 1,
      trail: 60,
      shadow: true,
      zIndex: 2e9,
      top: '50%',
      left: '50%',
      scale: 1.00,
      loadedClassName: 'loadedContent',
    };

    return (
      <Loader
        loaded={false}
        className="spinner"
        options={options}
      />
    );
  }

  render() {
    const {
      disabled,
      imageIndex,
      images,
      isOpen,
      loading,
      noResults
    } = this.state;

    if (loading) {
      return (this.renderLoader());
    }

    return (
      <div className="wrapper">
        <div>
          Use the search input to find any photos you want.
          You can search for cute dogs, scenery, food, or anything you can imagine!
          Enter what you would like to see and open the lightbox to see the results!
        </div>
        <input
          type="text"
          id="search"
          placeholder="What kind of photos?"
          onChange={this.onInputChange}
        />
        <Button
          disabled={disabled}
          label="Open Lightbox"
          onClick={this.onOpenClick}
        />
        {!!noResults &&
          <div className="error">
            Sorry, there were no results for your search.
            Please try again.
          </div>}
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
