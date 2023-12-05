import SuperElement from './SuperElement.js'

/**
 * @typedef {Object} SuperGrid
 * @property {string} options.tag - name of a HTML tag
 * @property {string} options.height - the height of the box
 */

/**
 * create a div element with name of HTML tag and height.
 * @constructor
 * @extends SuperElement
 * @param {Object} options
 * @param {string} options.tag - name of a HTML tag
 * @param {string} options.height - the height of the box
 * @example
 * const grid = new SuperGrid({tag:"div", height:'200px'})
 */
function SuperGrid ({
  tag = 'div',
  height = '200px'

} = {}) {
  /**
    //@ param- append parent data to child
    */
  SuperElement.call(this, tag)

  this.element.style.display = 'flex'
  this.element.style.height = height
}
SuperGrid.prototype = Object.create(SuperElement.prototype)

/**
 * alignment of element, ie center, top, right, left
 * justify content of element.
 * @param {string} alignment - alignment of element
 * @example
 * grid.alignment('center')
 * grid.alignment('bottomLeft')
 */

SuperGrid.prototype.alignment = function (alignment) {
  switch (alignment) {
    case 'center':
      this.element.style.justifyContent = 'center'
      this.element.style.alignItems = 'center'
      console.log('center')
      break
    case 'top':
      this.element.style.alignItems = 'start'
      this.element.style.justifyContent = 'start'
      console.log('top')
      break
    case 'right':
      this.element.style.alignItems = 'right'
      this.element.style.justifyContent = 'right'
      console.log('right')
      break
    case 'left':
      this.element.style.alignItems = 'left'
      this.element.style.justifyContent = 'left'
      console.log('left')
      break
    case 'bottomRight':
      this.element.style.alignItems = 'end'
      this.element.style.justifyContent = 'right'
      console.log('bottomRight')
      break
    case 'bottomLeft':
      this.element.style.alignItems = 'end'
      this.element.style.justifyContent = 'left'
      console.log('bottomLeft')
      break
    case 'bottomCenter':
      this.element.style.alignItems = 'end'
      this.element.style.justifyContent = 'center'
      console.log('bottomCenter')
      break
    case 'spaceBetween':
      this.element.style.alignItems = 'center'
      this.element.style.justifyContent = 'space-between'
      console.log('space-Between')
      break
    case 'spaceAround':
      this.element.style.alignItems = 'center'
      this.element.style.justifyContent = 'space-Around'
      console.log('space-Around')
      break
    case 'spaceEvenly':
      this.element.style.alignItems = 'center'
      this.element.style.justifyContent = 'space-Evenly'
      console.log('space-Evenly')
      break
    case 'topRight':
      this.element.style.alignItems = 'start'
      this.element.style.justifyContent = 'right'
      console.log('topRight')
      break
    case 'topCenter':
      this.element.style.alignItems = 'start'
      this.element.style.justifyContent = 'center'
      console.log('topCenter')
      break
    case 'topLeft':
      this.element.style.alignItems = 'start'
      this.element.style.justifyContent = 'left'
      console.log('topLeft')
      break
  }
}
export default SuperGrid
