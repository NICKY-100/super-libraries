import SuperElement from "./SuperElement.js"
import SuperOption from "./SuperOption.js";

/**
 * @param {string} select is called.
 * @param SuperElement is called with parameters this and select
 * @param a new superOption is created with 
 */
function SuperSelect() {
    SuperElement.call(this, 'select')
    for (let i = 0; i < SuperOption.length; i++) {

        const option = new SuperOption('color', "2"['blue', 'six'])
        option.appendTo(this.element)
    }
}
export default SuperSelect;