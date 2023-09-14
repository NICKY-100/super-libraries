import SuperElement from "./SuperElement";
/**
 *  @param {string} option and this,
 * @param element value  is called with value
 * @param element type, and innertext
 * @param superOption is exported by default
 */
function SuperOption(value, text) {
    SuperElement.call(this, 'option')
    this.element.value = value
    this.element.innerText = text
}

export default SuperOption;