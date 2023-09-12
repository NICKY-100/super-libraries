import SuperElement from "./SuperElement.js"
import SuperOption from "./SuperOption.js";
function SuperSelect() {
    SuperElement.call(this, 'select')
    const option = new SuperOption()
}

export default SuperSelect;