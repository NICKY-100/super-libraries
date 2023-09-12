import SuperElement from "./SuperElement.js"

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