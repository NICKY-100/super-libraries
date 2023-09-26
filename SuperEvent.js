import SuperElement from "./SuperElement.js"

/**
 * This callback is used after an event listener.
 * @callback SuperEvent~eventCallback
* @param {Event} event - {@link https://developer.mozilla.org/en-US/docs/Web/API/Event Event} interface represents an event which takes place in the DOM.
 * 
 */

/**
 * create a button of specific type and text
 * @constructor
 * @extends SuperElement
 * @param {string} tag - name of a HTML tag.
 * @example
 * const event = new SuperEvent('tag')
 */
function SuperEvent(tag) {
    SuperElement.call(this, tag)
}
SuperEvent.prototype = Object.create(SuperElement.prototype)

/**
 * adding an event listener on submit to the element.
 * @param {SuperEvent~eventCallback} callback -  This callback is used after an event listener.
 */
SuperEvent.prototype.submit = function (callback) {
    this.element.addEventListener('submit', (e) => {
        e.preventDefault()
        callback(e)
    })
}
export default SuperEvent;