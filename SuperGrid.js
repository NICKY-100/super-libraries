import SuperElement from "./SuperElement.js"
/**
@param superGrid function 
*/
// superGrid function
function SuperGrid({
    tag = 'div',
    height = '200px'

} = {}) {
    //
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

    } else if (alignment === 'top') {
        this.element.style.alignItems = 'start'

    } else if (alignment === "right") {
        this.element.style.justifyContent = "right"
    }
}
export default SuperGrid