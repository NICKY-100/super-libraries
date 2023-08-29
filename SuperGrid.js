import SuperElement from "./SuperElement.js"
/**
@param superGrid function 
*/
// superGrid function
function SuperGrid({
    tag = 'div'
} = {}) {
    //
    /**
    //@ param- append parent data to child
    */


    SuperElement.call(this, tag)


    this.element.style.display = 'flex'
}
//create supergrid object
SuperGrid.prototype = Object.create(SuperElement.prototype)

SuperGrid.prototype.alignment = function (alignment) {
    if (alignment === 'center') {
        this.element.style.justifyContent = 'center'
        this.element.style.alignItems = 'center'

    } else if (alignment === 'vcenter') {
        this.element.style.alignItems = 'center'

    }

}
export default SuperGrid