import SuperElement from "./SuperElement.js"
/**
 *  @param {string} select Somebody's name.
 * @param SuperButton is called with parameters this and select
 * @param an object is created 
 */
function SuperButton(type, text) {
    SuperElement.call(this, 'button')

    this.element.type = type
    this.element.innerText = text
}
SuperButton.prototype = Object.create(SuperElement.prototype)

export default SuperButton;