import SuperElement from "./SuperElement";

function SuperOption(value, text) {
    SuperElement.call(this, 'option')
    this.element.value = value
    this.element.innerText = text
}

export default SuperOption;