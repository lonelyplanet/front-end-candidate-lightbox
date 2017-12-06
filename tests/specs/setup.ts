import { JSDOM } from 'jsdom'
import * as Enzyme from 'enzyme'
import * as EnzymeAdapter from 'enzyme-adapter-react-16'

// Enzyme
// ------------------------------------
Enzyme.configure({
  adapter: new EnzymeAdapter(),
})

// JSDOM
// ------------------------------------
const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop),
      }),
      {},
    )
  Object.defineProperties(target, props)
}

;(global as any).window = window
;(global as any).document = window.document
;(global as any).navigator = {
  userAgent: 'node.js',
}
copyProps(window, global)
