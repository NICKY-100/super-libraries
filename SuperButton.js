import SuperElement from "./SuperElement.js"
/**
 *  @param {string} button and this,
 * @param SuperButton is called with parameters this and select
 * @param element type, and innertext
 * @param an object is created 
 * @param superbutton is exported by default
 */
function SuperButton(type, text) {
    SuperElement.call(this, 'button')

    this.element.type = type
    this.element.innerText = text
}
SuperButton.prototype = Object.create(SuperElement.prototype)

export default SuperButton;