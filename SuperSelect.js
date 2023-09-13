import SuperElement from "./SuperElement.js"
import SuperOption from "./SuperOption.js";

/**
 * @param {string} select Somebody's name.
 */
function SuperSelect() {
    SuperElement.call(this, 'select')
    const option = new SuperOption('option 1', 'name'['boxColor', 'green'])

    //const option2 = new SuperOption('box2', 'name'['boxColor', 'blue'])

    for (let i = 0; i < SuperOption.length; i++) {

    }
    option.appendTo(grid.element)
}

export default SuperSelect;