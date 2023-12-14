import SuperEvent from './SuperEvent.js'
/**
 * @typedef {Object} SuperElementOptions
 * @property {string} tag - name of a HTML tag
 */

// parent Constructor
/**
 * create an element of any specific type
 * @class
 * @param {string} tag - name of a HTML tag.
 * @example
 * const element = new SuperElement('div')
 */
function SuperElement (tag) {
  /** @type {HTMLElement} */
  this.element = document.createElement(tag)
}
SuperElement.prototype = Object.create(SuperEvent.prototype)
SuperElement.prototype.constructor = SuperElement
/**
 * appending element to parent element
 * @param {HTMLElement} parentElement - parent HTML element appending to SuperElement element
 * @example
 * const myElement = new SuperElement("div")
 * myElement.appendTo(document.createElement('h1'))
 */
SuperElement.prototype.appendTo = function (parentElement) {
  if (parentElement.element && parentElement.element.tagName) {
    parentElement = parentElement.element
  }
  parentElement.append(this.element)
}
/**
 *remove an element from the DOM
 */
SuperElement.prototype.remove = function () {
  this.element.remove()
}

export default SuperElement
