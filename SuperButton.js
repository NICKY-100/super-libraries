import SuperElement from "./SuperElement.js"
SuperButton.prototype = object.create(SuperElement.prototype)

function SuperEvent(tag) {
    SuperElement.call(this, tag)
}

export default SuperButton