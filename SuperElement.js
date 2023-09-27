// parent Constructor
/**
 * create an element of any specific type 
 * @constructor
 * @param {string} tag - name of a HTML tag.
 * @example 
 * const element = new superElement('div')
 */
function SuperElement(tag) {
    this.element = document.createElement(tag);
}

/**
 * appending element to parent element
 * @param {SuperElement} parentElement - main div element
 */
SuperElement.prototype.appendTo = function (parentElement) {
    parentElement.append(this.element);
};

export default SuperElement;
