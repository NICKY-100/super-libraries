import SuperElement from "./SuperElement.js"
/**
@param superGrid function 
*/
// superGrid function
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
//create supergrid object
SuperGrid.prototype = Object.create(SuperElement.prototype)

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
    } else if (alignment === "end") {
        this.element.style.justifyContent = "end"
    }
}
export default SuperGrid