import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Lightbox from '../../src/components/Lightbox';


describe('<Lightbox />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {};

    wrapper = shallow(<Lightbox {...props} />);
  });

  it('should render', () => {
    expect(true).to.be.true;
  });
});
