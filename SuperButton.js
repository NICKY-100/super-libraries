import SuperElement from "./SuperElement.js"
/**
 * * create a button of specific type and text
 * @constructor
 * @extends SuperElement
 * @param {string} type - the type of button used.
 * @param {string} text - the text used.
 */
function SuperButton(type, text) {
    SuperElement.call(this, 'button')

    this.element.type = type
    this.element.innerText = text
}

SuperButton.prototype = Object.create(SuperElement.prototype)

export default SuperButton;