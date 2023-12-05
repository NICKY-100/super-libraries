import SuperElement from './SuperElement.js'
import SuperOption from './SuperOption.js'

/**
 * @typedef {Object} SuperSelect
 * @property {string} select.name - the selected name option
 * @property {Array.<string[]>} select.options - list of values and text for superOptions.
 */

/**
 * create a select element with a list of options, each with values and text.
 * @constructor
 * @extends SuperElement
 * @param {Object} select -
 * @param {string} select.name -
 * @param {Array.<string[]>} select.options - list of values and text for superOptions.
 * @example
 * const select = new SuperSelect({
 *  name: 'mySelect',
 *  options: [['1', "one"],["2", 'two']]
 * })
 */
function SuperSelect ({ name, options }) {
  SuperElement.call(this, 'select')
  this.element.name = name
  for (let i = 0; i < options.length; i++) {
    const option = new SuperOption(options[i][0], options[i][1])
    option.appendTo(this.element)
  }
}
SuperSelect.prototype = Object.create(SuperElement.prototype)

export default SuperSelect
