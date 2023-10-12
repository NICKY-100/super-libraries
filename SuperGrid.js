import SuperElement from "./SuperElement.js"
/**
 * create a div element with name of HTML tag and height.
 * @constructor
 * @extends SuperElement
 * @param {string} tag - name of a HTML tag
 * @param {string} height - the height of the box
 * @example
 * const grid = new SuperGrid("div", '200px')
 */
function SuperGrid({
    tag = 'div',
    height = '200px'

} = {}) {

    /**
    //@ param- append parent data to child
    */
    SuperElement.call(this, tag)

    this.element.style.display = 'flex'
    this.element.style.height = height
}
SuperGrid.prototype = Object.create(SuperElement.prototype)

/**
 * alignment of element, ie center, top, right, left
 * justify content of element.
 * @param {string} alignment - alignment of element
 * @example
 * grid.alignment('center')
 * grid.alignment('bottomLeft')
 */
SuperGrid.prototype.alignment = function (alignment) {
    if (alignment === 'center') {
        this.element.style.justifyContent = 'center'
        this.element.style.alignItems = 'center'
        //alignment top using justify content
    } else if (alignment === 'top') {
        this.element.style.alignItems = 'start'
        //alignment right using justify content
    } else if (alignment === "right") {
        this.element.style.justifyContent = "right"
        //alignment left using justify content
    } else if (alignment === "left") {
        this.element.style.justifyContent = "left"
        //justify content left
    } else if (alignment === "bottom") {
        this.element.style.alignItems = "end"
        //align items end
    } else if (alignment === "bottomRight") {
        this.element.style.alignItems = "end"
        this.element.style.justifyContent = "right"
        //justify content right
    } else if (alignment === "bottomLeft") {
        this.element.style.alignItems = "end"
        this.element.style.justifyContent = "left"
        // justify content left
    } else if (alignment === "bottomCenter") {
        this.element.style.alignItems = "end"
        this.element.style.justifyContent = "center"
        //example suing stretch
    } else if (alignment === "stretch") {
        this.element.style.alignItems = "stretch"
    }
}
export default SuperGrid

