// parent Constructor
/**
 * create an element of any specific type 
 * @constructor
 * @param {string} tag - name of a HTML tag.
 * @example 
 * const element = new SuperElement('div')
 */
function SuperElement(tag) {
    this.element = document.createElement(tag);
}

/**
 * appending element to parent element
 * @param {HTMLElement} parentElement - parent HTML element appending to SuperElement element
 * @example
 * const myElement = new SuperElement("div")
 * myElement.appendTo(document.createElement('h1'))
 */
SuperElement.prototype.appendTo = function (parentElement) {
    parentElement.append(this.element);
};

export default SuperElement;
