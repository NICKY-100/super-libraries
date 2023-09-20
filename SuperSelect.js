import SuperElement from "./SuperElement.js"
import SuperOption from "./SuperOption.js";

/**
 * @param {string} color - option 1 inside select
 * @param {string} box1- second option inside array of first select option
 * @param {string} one - first option of second selected array option
 * @param {string} box2 - second option inside array of second select option
 * @example 
 * @param a new superOption is created with 
 */
function SuperSelect(options = [['color', 'box1'], ['one', 'box2']]) {
    SuperElement.call(this, 'select')
    for (let i = 0; i < options.length; i++) {

        const option = new SuperOption(options[i][0], options[i][1])
        // const option1 = new SuperOption('color', '3')
        option.appendTo(this.element)
    }
}
SuperSelect.prototype = Object.create(SuperElement.prototype)

export default SuperSelect;