import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = [
       'https://www.jpl.nasa.gov/edu/images/news/cassini_ringcrossing.gif',
       'http://www.slate.com/content/dam/slate/blogs/bad_astronomy/2014/06/Ten%20Years%20at%20Saturn/cassini_backlit.jpg.CROP.original-original.jpg',
       'http://static4.businessinsider.com/image/58e5587677bb70f3398b6506-800',
       'https://www.nasa.gov/sites/default/files/thumbnails/image/cassini_grandfinale_orbits.jpg',
       'http://www.aljazeera.com/mritems/Images/2017/4/26/e918aee1b243426d8fcccb1e65c3e902_18.jpg',
       'https://saturn.jpl.nasa.gov/internal_resources/791/',
       'http://a.abcnews.com/images/Technology/HT-cassini-nasa-5804_PIA14944_1x1_1600.jpg',
       'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/2-cassinimissi.jpg',
  ];


class App extends React.Component {
    constructor(props) {
        super(props);
 
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
 
    render() {
        const {
            photoIndex,
            isOpen,
        } = this.state;
 
        return (
            <div>
                <button
                    type="button"
                    className="button js-lightbox-opener"
                    onClick={() => this.setState({ isOpen: true })}
                >
                    Open Lightbox
                </button>
 
                {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
 
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                        
                    />
                }
            </div>
        );
    }
}
export default App;