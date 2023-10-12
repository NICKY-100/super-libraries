import SuperElement from "./SuperElement.js"
import SuperOption from "./SuperOption.js";

/**
 * create a select element with a list of options, each with values and text.  
 * @constructor
 * @extends SuperElement
 * @param {Array.<string[]>} option - list of values and text for superOptions. 
 * @example 
 * const select = new SuperSelect([['1', "one"],["2", 'two']])
 */
function SuperSelect(name, options = [['color', 'box1'], ['one', 'box2']]) {
    SuperElement.call(this, 'select')
    this.element.name = name
    for (let i = 0; i < options.length; i++) {

        const option = new SuperOption(options[i][0], options[i][1])
        option.appendTo(this.element)
    }
}
SuperSelect.prototype = Object.create(SuperElement.prototype)

export default SuperSelect;