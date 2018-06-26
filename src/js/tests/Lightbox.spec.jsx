import React from 'react';
import { mount } from 'enzyme';

import Lightbox from '@/js/components/Lightbox';
import styleVariables from '@/styles/exports.scss';


const lightboxFadeTime = parseInt(styleVariables.lightboxFadeTimeMs, 10);

it('renders the <Lightbox /> component', () => {
  const wrapper = mount(<Lightbox />);
  expect(wrapper.find(Lightbox)).toHaveLength(1);
});

it('renders a content section', () => {
  const wrapper = mount(<Lightbox />);
  expect(wrapper.find('.content')).toHaveLength(1);
});

it('renders an image', () => {
  const wrapper = mount(<Lightbox />);
  expect(wrapper.find('img')).toHaveLength(1);
});

['previous', 'next', 'close'].forEach(buttonClass => {
  it(`renders a ${buttonClass} button`, () => {
    const wrapper = mount(<Lightbox />);
    expect(wrapper.find(`button.${buttonClass}`)).toHaveLength(1);
  });
});

it('is not active unless "isOpen" prop is true', () => {
  const wrapper = mount(<Lightbox isOpen={false} />);
  expect(wrapper.find('.lightbox.active')).toHaveLength(0);
  const wrapperOpen = mount(<Lightbox isOpen />);
  expect(wrapperOpen.find('.lightbox.active')).toHaveLength(1);
});

it('displays the first image by default', () => {
  const wrapper = mount(
    <Lightbox
      isOpen
      imageSrcs={['a', 'b', 'c']}
    />,
  );
  expect(wrapper.find('img').prop('src')).toEqual('a');
});

const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

it('calls the "onClose" callback prop when close button pressed', async () => {
  const onClose = jest.fn();
  const wrapper = mount(<Lightbox onClose={onClose} />);
  wrapper.find('button.close').props().onClick();
  await pause(lightboxFadeTime);
  wrapper.update();
  expect(onClose).toBeCalled();
});

/**
 * TODO: tests for next, previous buttons,
 * proper handling of key presses (esc, arrow keys),
 * inability to scroll background document while lightbox is open,
 * lightbox closes when overlay clicked.
 */
