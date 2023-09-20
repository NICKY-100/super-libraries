// parent Constructor
/**
 * create an element of any specific type 
 * @constructor
 * @extends appendTo
 * @param {string} tag - name of a HTML tag.
 * @example 
 * const element = new superElement('div')
 */
function SuperElement(tag) {
    this.element = document.createElement(tag);
}
// parent function and appending superElement to 
SuperElement.prototype.appendTo = function (parentElement) {
    parentElement.append(this.element);
};

export default SuperElement;
