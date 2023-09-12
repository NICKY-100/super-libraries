import SuperEvent from "./SuperEvent.js"
// create superform function
function SuperForm() {
    SuperEvent.call(this, 'form')
}
SuperForm.prototype = Object.create(SuperEvent.prototype)

// const form = new SuperForm()

export default SuperForm;