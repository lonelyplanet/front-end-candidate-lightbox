import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Overlay from '../../src/js/components/Overlay';
import Lightbox from '../../src/js/components/Lightbox';

describe("Overlay", function() {
    it("has the class `overlay hide` when showLightbox is false", function() {
        const onCloseLightbox = () => {};
        const wrapper = shallow(<Overlay onCloseLightbox={onCloseLightbox} showLightbox={false} />);

        expect(wrapper.contains(<div className="overlay hide" />)).to.equal(true);
    });

    it("has the class `overlay` but not `hide` when showLightbox is true", function() {
        const onCloseLightbox = () => {};
        const wrapper = shallow(<Overlay onCloseLightbox={onCloseLightbox} showLightbox={true} />);

        expect(wrapper.is('.overlay')).to.equal(true);
        expect(wrapper.is('.hide')).to.equal(false);
    });

    it("has the Lightbox component when showLightbox is true", function() {
        const onCloseLightbox = () => {};
        const wrapper = shallow(<Overlay onCloseLightbox={onCloseLightbox} showLightbox={true} />);

        expect(wrapper.find(Lightbox)).to.have.length(1);
    });
});
