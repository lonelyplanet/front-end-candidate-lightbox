import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Button from '../../src/components/Button';

describe('<Button />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      label: 'This is a button',
      id: 'button',
      onClick: sinon.spy(),
    };

    wrapper = mount(<Button {...props} />);
  });

  it('should render with the correct label', () => {
    expect(wrapper.props().label).to.equal('This is a button');
  });

  it('should render with the correct id', () => {
    expect(wrapper.props().id).to.equal('button');
  });

  it('should call onClick when clicked', () => {
    wrapper.simulate('click');

    expect(wrapper.props().onClick.called).to.equal(true);
  });
});
