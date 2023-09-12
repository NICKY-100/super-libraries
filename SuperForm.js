import SuperEvent from "./SuperEvent.js"
// create superform function
function SuperForm() {
    SuperEvent.call(this, 'form')
}
SuperForm.prototype = object.create(SuperEvent.prototype)

// const form = new SuperForm()

export default SuperForm;