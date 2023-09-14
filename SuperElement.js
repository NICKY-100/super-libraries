// parent Constructor
/**
 * @param SuperElement function is created with one parameter (tag)
 * @param element is created
 * @param superElement is exported by default
 */
function SuperElement(tag) {
    this.element = document.createElement(tag);
}
// parent function and appending superElement to 
SuperElement.prototype.appendTo = function (parentElement) {
    parentElement.append(this.element);
};

export default SuperElement;
