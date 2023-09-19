import SuperElement from "./SuperElement.js"
/**
 *  @param {string} button and this,
 * @param SuperButton is called with parameters this and select
 * @param element type, and innertext
 */
function SuperButton(type, text) {
    SuperElement.call(this, 'button')

    this.element.type = type
    this.element.innerText = text
}
/**
 * Assign the superButton to 
 * @param {object} create object that has specific type.
 */
SuperButton.prototype = Object.create(SuperElement.prototype)

export default SuperButton;