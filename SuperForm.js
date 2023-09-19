import SuperEvent from "./SuperEvent.js"

/**
 * @ param {string}
 * 
 */
function SuperForm() {
    SuperEvent.call(this, 'form')
}
SuperForm.prototype = Object.create(SuperEvent.prototype)


export default SuperForm;