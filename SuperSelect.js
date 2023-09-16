import SuperElement from "./SuperElement.js"
import SuperOption from "./SuperOption.js";

/**
 * @param {string} select is called.
 * @param SuperElement is called with parameters this and select
 * @param a new superOption is created with 
 */
function SuperSelect(options = [['color', 'box'], ['one', 'small']]) {
    SuperElement.call(this, 'select')
    for (let i = 0; i < options.length; i++) {

        const option = new SuperOption(options[i][0], options[i][1])
        // const option1 = new SuperOption('color', '3')
        option.appendTo(this.element)
    }
}
SuperSelect.prototype = Object.create(SuperElement.prototype)

export default SuperSelect;