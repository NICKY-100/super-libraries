import SuperElement from "./SuperElement.js";
// child constructor
/**
 * create a box of a specific color
 * @constructor
 * @extends SuperElement
 * @param {string} tag - name of the HTML tag.
 * @param {string} backgroundColor -  the background colour of element.
 * @param {string} width - width of element
 * @param {string} height - height of element
 * @example 
 * const box = new SuperBox('div', 'red', '100px', '100px');
 */
function SuperBox(tag, backgroundColor, width, height) {
    // append parent data to child
    SuperElement.call(this, tag);
    this.backgroundColor(backgroundColor);
    this.size(width, height);
}
// append parent prototypes to child constructor
SuperBox.prototype = Object.create(SuperElement.prototype);

/**
 * change background color 
 * @param {string} colour - background color 
 * @example
 * box.backgroundColor('red')
 */
SuperBox.prototype.backgroundColor = function (colour) {
    this.element.style.backgroundColor = colour
}
/**
 * setting size of element 
 * @param {string} width - width of element
 * @param {string} height - height of element
 * @example
 * box.size('200px', '200px')
 */
SuperBox.prototype.size = function (width, height) {
    this.element.style.width = width
    this.element.style.height = height
}
export default SuperBox;
