import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Gif from '../../src/js/components/Gif';

describe("Gif", function() {
    it("returns the 'Loading your gif' span if no image data is provided", function() {
        const image = {};
        const wrapper = shallow(<Gif image={image} />);

        expect(wrapper.text()).to.equal("Loading your gif");
    });

    it("returns the gif if the image data is provided", function() {
        const image = {
            alt: "Alice",
            height: '200',
            src: "https://media3.giphy.com/media/abc.gif",
            width: '300',
            url: "http://giphy.com/gifs/abc",
        };
        const wrapper = shallow(<Gif image={image} />);
        const linkEl = wrapper.find({ href: image.url });
        const imgEl = wrapper.find('img');

        expect(linkEl).to.have.length(1);
        expect(imgEl.prop('src')).to.equal(image.src);
        expect(imgEl.prop('alt')).to.equal(image.alt);
        expect(imgEl.prop('height')).to.equal(image.height);
        expect(imgEl.prop('width')).to.equal(image.width);
    });
});
