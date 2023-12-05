import SuperBox from '../SuperBox.js'
import SuperButton from '../SuperButton.js'
import SuperForm from '../SuperForm.js'
import SuperGrid from '../SuperGrid.js'
import SuperOption from '../SuperOption.js'
import SuperInput from '../SuperInput.js'
import SuperSelect from '../SuperSelect.js'

export const superConstructors = {
  SuperBox,
  SuperButton,
  SuperForm,
  SuperGrid,
  SuperOption,
  SuperInput,
  SuperSelect
}
/**
 * $e library of SuperElement
 * @namespace
 * @param {string} type
 * @param {(SuperBoxOptions|Object)} options
 * @return {SuperElement}
 * @example
 * const box = $e("SuperBox",{width: '100px'} )
 */
function $e (type, options) {
  return new superConstructors[type](options)
}

export default $e

// No matching export in "library/main.js" for import "SuperConstructors"
