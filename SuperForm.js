import SuperEvent from "./SuperEvent.js"

/**
 * create a form element
 * @constructor
 * @extends SuperEvent
 * @example
 * const form = new superform('form')
 */
function SuperForm() {
    SuperEvent.call(this, 'form')
}
SuperForm.prototype = Object.create(SuperEvent.prototype)


export default SuperForm;