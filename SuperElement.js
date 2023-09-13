// parent Constructor

function SuperElement(tag) {
    this.element = document.createElement(tag);
}
// parent function and appending superElement to 
SuperElement.prototype.appendTo = function (parentElement) {
    parentElement.append(this.element);
};

export default SuperElement;
