import SuperElement from './SuperElement.js'

/**
 * @typedef {Object} SuperInputOptions
 * @property {string} options.type - the input type
 * @property {string} options.name - the input name
 * @property {Array.<string[]>} [options.attributes =[]] - list of attributes that adds to the element.
 */

/**
 * inputs for elements
 * @constructor
 * @extends SuperEvent
 * @param {Object} options
 * @param {string} options.type - the input type
 * @param {string} options.name - the input name
 * @param {Array.<string[]>} [options.attributes=[]] - list of attributes that adds to the element.
 * @example
 * const myInput = new SuperInput({type:"text", name:"first-name", attributes:[["class", "input-large"]]})
 * <input tupe = "text" name ="first-name" class="input-large">
  */
// this function is incomplete
function SuperInput ({ type, name, attributes = [] }) {
  SuperElement.call(this, 'input')

  this.element.type = type
  this.element.name = name

  // add html  attributes to element
  for (let i = 0; i < attributes.length; i++) {
    const [name, value] = attributes[i]

    this.element.setAttributes(name, value)
  }
}
// const textInput = new SuperInput('text', "todo-item")
// const button = new SuperInput('button', "submit" , [
// [ " value"  "submit"]
// ])
// const todoForm
SuperInput.prototype = Object.create(SuperElement.prototype)

SuperInput.prototype.clear = function () {
  this.element.value = ''
}
export default SuperInput
