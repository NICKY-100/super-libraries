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
// constructor ({tag}){
//   super('Element')

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

export default SuperElement
