import SuperElement from "./SuperElement";
/**
 * create list of element option with value and text.
 * @constructor
 * @extends SuperElement
 * @param {string} value - value of option element
 * @param {string} text - text within option element
 * @example
 * const option = new SuperOption("1", "one")
 */
function SuperOption(value, text) {
    SuperElement.call(this, 'option')
    this.element.value = value
    this.element.innerText = text
}
SuperOption.prototype = Object.create(SuperElement.prototype)

export default SuperOption;