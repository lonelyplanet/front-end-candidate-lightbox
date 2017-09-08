import React from 'react';
import PropTypes from 'prop-types';
import fetchImage from '../utils/request';

import Gif from './Gif';

const KEY = '209e877e58a84966bf6ff0fb6ae42720';

/**
 * Creates the Lightbox component
 */
class Lightbox extends React.Component {
    constructor(props) {
        super(props);
        const { tag, rating } = this.props;
        this.giphyUrl = `https://api.giphy.com/v1/gifs/random?tag=${tag}&api_key=${KEY}&rating=${rating}`;

        this.state = {
            image: {
                src: '',
                alt: '',
                url: '',
                height: '200',
                width: '200',
            },
            hasError: false,
        };

        this.onSuccessfulRequest = this.onSuccessfulRequest.bind(this);
        this.onFailedRequest = this.onFailedRequest.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    /**
     * Prevents the body from scrolling when the lightbox is open
     * Listens for key up to close the lightbox
     * Fetches the gif data
     * @return {void}
     */
    componentDidMount() {
        document.body.classList.add('noscroll');
        window.addEventListener('keyup', this.onKeyUp);
        fetchImage(this.giphyUrl, this.onSuccessfulRequest, this.onFailedRequest);
    }

    /**
     * Removes class from body element and keyup event listener
     * @return {void}
     */
    componentWillUnmount() {
        document.body.classList.remove('noscroll');
        window.removeEventListener('keyup', this.onKeyUp);
    }

    /**
     * Save the giphy image data to the state
     * @param {object} response - The response data object from giphy
     * @return {void}
     */
    onSuccessfulRequest(response) {
        const {
            fixed_height_downsampled_url,
            fixed_height_downsampled_height,
            fixed_height_downsampled_width,
            caption,
            url,
        } = response.data;

        this.setState({
            image: {
                url,
                src: fixed_height_downsampled_url,
                alt: caption,
                height: fixed_height_downsampled_height,
                width: fixed_height_downsampled_width,
            },
            hasError: false,
        });
    }

    /**
     * Sets `hasError` to true to display error message
     * @return {void}
     */
    onFailedRequest() {
        this.setState({
            hasError: true,
        });
    }

    /**
     * Closes the lightbox when the escape key is pressed
     * @param {KeyboardEvent} e The key press keyboard event
     * @return {void}
     */
    onKeyUp(e) {
        if (e.keyCode === 27) {
            this.props.onCloseLightbox();
        }
    }

    render() {
        const { image, hasError } = this.state;
        return (
            <div className="lightbox">
                <div
                    className="close"
                    role="button"
                    tabIndex="0"
                    onClick={this.props.onCloseLightbox}
                >
                    &times;
                </div>
                { !hasError
                    ? <Gif image={image} />
                    : <div>Unable to load gif!</div>
                }
            </div>
        );
    }
}

Lightbox.defaultProps = {
    rating: 'g',
    tag: 'alice+wonderland',
};

Lightbox.propTypes = {
    onCloseLightbox: PropTypes.func.isRequired,
    rating: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
};

export default Lightbox;
