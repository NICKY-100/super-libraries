import SuperBox from './SuperBox.js'
import SuperButton from './SuperButton.js'
import SuperForm from './SuperForm.js'
import SuperGrid from './SuperGrid.js'
import SuperInput from './SuperInput.js'
import SuperSelect from './SuperSelect.js'
/**
 * @typedef {import('./SuperBox.js').SuperBoxOptions} SuperBoxOptions
 */

/**
 * @typedef {import('./SuperGrid.js').SuperGridOptions} SuperGridOptions
 */

/**
 * @typedef {import('./SuperInput.js').SuperInputOptions} SuperInputOptions
 */
export const superConstructors = {
  SuperBox,
  SuperButton,
  SuperForm,
  SuperGrid,
  SuperInput,
  SuperSelect
}
/**
 * $e library of SuperElement
 * @namespace
 * @param {'SuperBox'|'SuperButton'|'SuperElement'|'SuperForm'|'SuperGrid'|'SuperInput'|'SuperSelect'} type
 * @param {(SuperBoxOptions|SuperGridOptions)} [options]
 * @return {SuperBox|SuperButton|SuperForm|SuperGrid|SuperInput|SuperSelect}
 * @example
 * const box = $e("SuperBox",{width: '100px'} )
 */
function $e (type, options) {
  return new superConstructors[type](options)
}

export default $e

// No matching export in "library/main.js" for import "SuperConstructors"
