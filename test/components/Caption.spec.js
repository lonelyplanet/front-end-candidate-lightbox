import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

import Caption from '../../src/components/Caption';

describe('<Caption />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      body: 'This is a caption',
      index: 1,
      total: 7,
    };

    wrapper = mount(<Caption {...props} />);
  });

  it('should render', () => {
    expect(wrapper.children()).to.have.length.above(0);
  });

  it('should render the correct caption', () => {
    expect(wrapper.props().body).to.equal('This is a caption');
  });

  it('should render the correct image count', () => {
    expect(wrapper.text()).to.contain('1 of 7');
  });
});
