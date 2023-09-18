import SuperElement from "./SuperElement.js";
// child constructor
/**
 * @param {object} SuperBox with parameters tag, color, width, height
 * @param {Object} type, and innertext
 * @param SuperBox is exported by default
 * 
@param SuperElement — function is created with one parameter (tag)
@param element — is created
@param superElement — is exported by default
 */
function SuperBox(tag, color, width, height) {
    // append parent data to child
    SuperElement.call(this, tag);
    this.color(color);
    this.size(width, height);
}
// append parent prototypes to child constructor
SuperBox.prototype = Object.create(SuperElement.prototype);

// add new prototypes to child
SuperBox.prototype.color = function (colour) {
    this.element.style.backgroundColor = colour
}
//size function with dimensions
SuperBox.prototype.size = function (width, height) {
    this.element.style.width = width
    this.element.style.height = height
}
export default SuperBox;
