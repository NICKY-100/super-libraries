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

SuperForm.prototype.getVal = function (name) {
    const formData = new FormData(this.element)
    return formData.get(name)

}


export default SuperForm;