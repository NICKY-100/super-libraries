import SuperElement from "./SuperElement.js"
/**
* * create a button of specific type and text
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

SuperEvent.prototype.submit = function (callback) {
    this.element.addEventListener('click', (e) => {
        e.preventDefault()
        callback(e)
    })
}
export default SuperEvent;