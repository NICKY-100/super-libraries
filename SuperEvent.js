import SuperElement from "./SuperElement.js"
SuperEvent.prototype = object.create(SuperElement.prototype)

SuperEvent.prototype.submit = function (callback) {
    this.element.addEventListener('click', (e) => {
        e.preventDefault()
        callback(e)
    })
}
export default SuperEvent