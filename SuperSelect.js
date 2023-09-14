import SuperElement from "./SuperElement.js"
import SuperOption from "./SuperOption.js";

/**
 * @param {string} select Somebody's name.
 * @param SuperElement is called with parameters this and select
 * @param a new superOption is created with 
 */
function SuperSelect() {
    SuperElement.call(this, 'select')
    const option = new SuperOption('blue', 'box'['boxColor', 'two'])

    //const option2 = new SuperOption('box2', 'name'['boxColor', 'blue'])

    for (let i = 0; i < SuperOption.length; i++) {

    }
    option.appendTo(this.element)
}

export default SuperSelect;