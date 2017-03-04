import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Lightbox from '../../src/components/Lightbox';
import Caption from '../../src/components/Caption';
import Navigation from '../../src/components/Navigation';
import Modal from 'react-modal';

describe('<Lightbox />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      imageIndex: 0,
      images: [{src: '#', caption: 'photo'}],
      isOpen: true,
      onClickNext: sinon.spy(),
      onClickPrev: sinon.spy(),
      onClose: sinon.spy(),
      showCaption: true,
    };

    wrapper = shallow(<Lightbox {...props} />);
  });

  it('should render', () => {
    expect(wrapper.children()).to.have.length.above(0);
  });

  it('should render an image', () => {
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('should render a Modal', () => {
    expect(wrapper.find(Modal)).to.have.length(1);
  });

  it('should render a navigation bar', () => {
    expect(wrapper.find(Navigation)).to.have.length(1);
  });

  it('should render a caption bar', () => {
    expect(wrapper.find(Caption)).to.have.length(1);
  });

  describe('<Lightbox /> in unopened state', () => {
    beforeEach(() => {
      const props = {
        imageIndex: 0,
        images: [{src: '#', caption: 'photo'}],
        isOpen: false,
        onClickNext: sinon.spy(),
        onClickPrev: sinon.spy(),
        onClose: sinon.spy(),
        showCaption: true,
      };

      wrapper = shallow(<Lightbox {...props} />);
    });

    it('should render with modal closed', () => {
      const modal = wrapper.find(Modal);

      expect(modal.find('.inner')).to.have.length(0);
    });

  });

  describe('<Lightbox /> with no captions', () => {
    beforeEach(() => {
      const props = {
        images: [{src: '#', caption: 'photo'}],
        isOpen: true,
        onClickNext: sinon.spy(),
        onClickPrev: sinon.spy(),
        onClose: sinon.spy(),
        showCaption: false,
      };

      wrapper = shallow(<Lightbox {...props} />);
    });

    it('should render without a caption', () => {
      expect(wrapper.find(Caption)).to.have.length(0);
    });

  });

});
