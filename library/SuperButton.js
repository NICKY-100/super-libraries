import SuperElement from './SuperElement.js'

/**
 * @typedef {Object} Button
 * @property {string} options.type - the type of button used.
 * @property {string} options.text - the text used.
 */

/**
 * * create a button of specific type and text
 * @constructor
 * @arguments SuperElement
 * @param {Object} options
 * @param {string} options.type - the type of button used.
 * @param {string} options.text - the text used.
 * @example
 * const button = new SuperButton({text:'small', type:'submit'});
 */
function SuperButton ({ type, text = '', attributes }) {
  SuperElement.call(this, 'button', attributes)

  this.element.type = type
  this.element.innerText = text
}

SuperButton.prototype = Object.create(SuperElement.prototype)
SuperButton.prototype.constructor = SuperButton
export default SuperButton
