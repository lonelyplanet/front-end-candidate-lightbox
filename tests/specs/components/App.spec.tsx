import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from '~/components/App'

test('matches snapshot', () => {
  expect(toJson(shallow(<App />))).toMatchSnapshot()
})
