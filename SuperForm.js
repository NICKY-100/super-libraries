import SuperEvent from "./SuperEvent.js"

/**
 * * * create a form for supergrid
 * @constructor
 * @extends SuperEvent
 * @param {} - has no parameters
 * @param {string} form - this is the form on grid
 * @example
 * const form = new superform('form')
 */
function SuperForm() {
    SuperEvent.call(this, 'form')
}
SuperForm.prototype = Object.create(SuperEvent.prototype)


export default SuperForm;