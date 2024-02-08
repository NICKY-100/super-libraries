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
 * const form = new SuperEvent('form')
 */
function SuperEvent (tag) {

}

/**
 * adding an event listener on submit to the element.
 * @param {SuperEvent~eventCallback} callback -  This callback is used after an event listener.
 * @example
 * form.submit(function(event){
 *  console.log("hello world")
 * })
 */
SuperEvent.prototype.submit = function (callback) {
  this.element.addEventListener('submit', (e) => {
    e.preventDefault()
    callback(e)
  })
}
/**
 * adding an event listener on click to the element.
 * @param {SuperEvent~eventCallback} callback -  This callback is used after an event listener.
 * @example
 * form.click(function(event){
 *  console.log("hello world")
 * })
 */
SuperEvent.prototype.click = function (callback) {
  this.element.addEventListener('click', (e) => {
    callback(e)
  })
}
export default SuperEvent
