import SuperElement from "../SuperElement.js"
import SuperBox from "../SuperBox.js"
import SuperButton from "../SuperButton.js"
import SuperEvent from "../SuperElement.js"
import SuperForm from "../SuperForm.js"
import SuperGrid from "../SuperGrid.js"
import SuperOption from "../SuperOption.js"
import SuperInput from "../SuperInput.js"
import SuperSelect from "../SuperSelect.js"

export const superConstructors = {
    SuperBox,
    SuperButton,
    SuperElement,
    SuperEvent,
    SuperForm,
    SuperGrid,
    SuperOption,
    SuperSelect,
    SuperInput,
}

export default function $e(type, options) {
    if (type === "SuperBox") {
        return new superConstructors.SuperBox(options)
    }
}

