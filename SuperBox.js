import SuperElement from "./SuperElement.js";
// child constructor
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
