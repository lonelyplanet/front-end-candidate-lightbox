import React from 'react';
import PropTypes from 'prop-types';

import Lightbox from './Lightbox';

/**
 * Displays the dark overlay behind the lightbox
 */
const Overlay = ({ onCloseLightbox, showLightbox }) => {
    if (showLightbox) {
        return (
            <div className="overlay">
                <Lightbox onCloseLightbox={onCloseLightbox} />
            </div>
        );
    }
    return <div className="overlay hide" />;
};

Overlay.propTypes = {
    onCloseLightbox: PropTypes.func.isRequired,
    showLightbox: PropTypes.bool.isRequired,
};

export default Overlay;
