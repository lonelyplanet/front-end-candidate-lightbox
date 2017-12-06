import * as React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Lightbox from '~/components/Lightbox'

jest.useFakeTimers()

const fixtures = {
  image: {
    imageSrc: 'http://www.themistermen.co.uk/images/Mr_Small.jpg',
    title: 'Mock image title',
    description: 'Mock image description',
  },
}

const _bodyClassList = document.body.classList
const _addEventListener = document.addEventListener
const _removeEventListener = document.removeEventListener

beforeEach(() => {
  ;(document.body.classList as any) = []
  document.addEventListener = jest.fn()
  document.removeEventListener = jest.fn()
})

afterEach(() => {
  document.addEventListener = _addEventListener
  document.removeEventListener = _removeEventListener
  ;(document.body.classList as any) = _bodyClassList
})

test('Is loading by default', () => {
  const component = shallow(
    <Lightbox {...fixtures.image} onClose={jest.fn()} />,
  )
  expect(component.state('isLoading')).toBe(true)
})

test('Adds `lightbox-open` to the document body when mounted', () => {
  const component = mount(<Lightbox {...fixtures.image} onClose={jest.fn()} />)
  expect(document.body.classList.contains('lightbox-open')).toBe(true)
})

test('Removes `lightbox-open` from the document body when unmounted', () => {
  const component = mount(<Lightbox {...fixtures.image} onClose={jest.fn()} />)
  expect(document.body.classList.contains('lightbox-open')).toBe(true)
  component.unmount()
  expect(document.body.classList.contains('lightbox-open')).toBe(false)
})

test('Closes if the close button is clicked', () => {
  const onClose = jest.fn()
  const component = shallow(<Lightbox {...fixtures.image} onClose={onClose} />)
  component.find('.lightbox__close').simulate('click')
  jest.runAllTimers()
  expect(onClose).toHaveBeenCalled()
})

test('Closes if there is a click event outside of the lightbox', () => {
  const onClose = jest.fn()
  const component = mount(<Lightbox {...fixtures.image} onClose={onClose} />)

  component.instance()._lightbox = {
    contains: () => false,
  }

  component.instance()._checkForOutsideClick({ target: {} })
  jest.runAllTimers()
  expect(onClose).toHaveBeenCalled()
})

test('Closes if there is a click event outside of the lightbox', () => {
  const onClose = jest.fn()
  const listeners = []
  ;(document.addEventListener as any) = (type: string, handler: Function) => {
    listeners.push({ type, handler })
  }
  const component = mount(<Lightbox {...fixtures.image} onClose={onClose} />)
  listeners
    .filter(({ type }) => type === 'keydown')
    .forEach(({ handler }) => handler({ key: 'Escape' }))

  jest.runAllTimers()
  expect(onClose).toHaveBeenCalled()
})

test('Renders a loader and placeholder while the image is loading', () => {
  const component = shallow(
    <Lightbox {...fixtures.image} onClose={jest.fn()} />,
  )
  component.setState({ isLoading: true })
  const placeholder = component.find('.lightbox__loader')

  expect(placeholder).toHaveLength(1)
  expect(toJson(placeholder)).toMatchSnapshot()
})

test("Hides the image while it's loading", () => {
  const component = shallow(
    <Lightbox {...fixtures.image} onClose={jest.fn()} />,
  )
  component.setState({ isLoading: true })
  expect(component.find('.lightbox__image').prop('hidden')).toBe(true)
})

test('Unhides the image once it has finished loading', () => {
  const component = shallow(
    <Lightbox {...fixtures.image} onClose={jest.fn()} />,
  )
  component.setState({ isLoading: false })
  expect(component.find('.lightbox__image-placeholder')).toHaveLength(0)
  expect(component.find('.lightbox__image').prop('hidden')).toBe(false)
  expect(toJson(component.find('img'))).toMatchSnapshot()
})

test('Renders the image title and description when they exist', () => {
  let component
  const { imageSrc, title, description } = fixtures.image

  component = shallow(
    <Lightbox
      imageSrc={imageSrc}
      title={title}
      description={description}
      onClose={jest.fn()}
    />,
  )
  expect(component.find('.lightbox__footer').text()).toBe(
    `${title}${description}`,
  )

  component = shallow(
    <Lightbox imageSrc={imageSrc} title={title} onClose={jest.fn()} />,
  )
  expect(component.find('.lightbox__footer').text()).toBe(`${title}`)

  component = shallow(
    <Lightbox
      imageSrc={imageSrc}
      description={description}
      onClose={jest.fn()}
    />,
  )
  expect(component.find('.lightbox__footer').text()).toBe(`${description}`)
})

test('Does not render the lightbox footer when there is no title or description', () => {
  const component = shallow(
    <Lightbox imageSrc={fixtures.image.imageSrc} onClose={jest.fn()} />,
  )
  expect(component.find('.lightbox__footer')).toHaveLength(0)
})
