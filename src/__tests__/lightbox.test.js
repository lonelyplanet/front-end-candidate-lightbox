import React from 'react'
import Lightbox from '../App/Lightbox'
import renderer from 'react-test-renderer'

test('Lightbox renders correctly', () => {
  const component = renderer.create(<Lightbox />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
