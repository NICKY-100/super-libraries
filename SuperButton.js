import SuperElement from "./SuperElement.js"

function SuperButton(type, text) {
    SuperElement.call(this, 'button')

    this.element.type = type
    this.element.innerText = text
}
SuperButton.prototype = object.create(SuperElement.prototype)

export default SuperButton