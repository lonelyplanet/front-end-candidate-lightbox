import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays the gif or a loading message
 */
const Gif = ({ image }) => {
    const { alt, height, src, width, url } = image;

    if (!src) {
        return <span>Loading your gif</span>;
    }

    return (
        <a href={url} target="_blank">
            <img alt={alt} src={src} width={width} height={height} />
        </a>
    );
};

Gif.defaultProps = {
    image: {
        alt: null,
        height: '200',
        src: null,
        width: '200',
        url: null,
    },
};

Gif.propTypes = {
    image: PropTypes.shape({
        alt: PropTypes.string,
        height: PropTypes.string,
        src: PropTypes.string,
        width: PropTypes.string,
        url: PropTypes.string,
    }),
};

export default Gif;
