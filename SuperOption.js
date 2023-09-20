import SuperElement from "./SuperElement";
/**
 * @param {string} value value of option
 * @param {string} text - text within element
 * @param element type, and innertext
 * @param superOption is exported by default
 */
function SuperOption(value, text) {
    SuperElement.call(this, 'option')
    this.element.value = value
    this.element.innerText = text
}
SuperOption.prototype = Object.create(SuperElement.prototype)

export default SuperOption;