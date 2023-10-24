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

/**
 * getting value of element from SuperForm
 * @params {string} name - value of element from when function is called
 * @example
 * form.getVal('firstName')
 */
SuperForm.prototype.getVal = function (name) {
    const formData = new FormData(this.element)
    return formData.get(name)

}


export default SuperForm;