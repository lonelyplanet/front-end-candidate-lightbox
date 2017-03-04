import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from '../../src/components/Button';
import Navigation from '../../src/components/Navigation';

describe('<Navigation />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      handleNext: sinon.spy(),
      handlePrev: sinon.spy(),
      onClose: sinon.spy(),
    };

    wrapper = mount(<Navigation {...props} />);
  });

  it('should render', () => {
    expect(wrapper.children()).to.have.length.above(0);
  });

  it('should render 3 buttons', () => {
    expect(wrapper.find(Button)).to.have.length(3);
  });

  it('should trigger onClose function on button click', () => {
    const button = wrapper.find('#close');

    button.simulate('click');
    expect(wrapper.props().onClose.called).to.equal(true);
  });

  it('should trigger onClickPrev function on button click', () => {
    const prev = wrapper.find('#prev');

    prev.simulate('click');
    expect(wrapper.props().handlePrev.called).to.equal(true);
  });

  it('should trigger onClickNext function on button click', () => {
    const next = wrapper.find('#next');

    next.simulate('click');
    expect(wrapper.props().handleNext.called).to.equal(true);
  });
});
