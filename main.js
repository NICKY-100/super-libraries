//import SuperBox and SuperGrid from respective js files.
import SuperBox from './SuperBox.js';
import SuperGrid from './SuperGrid.js';
// new SuperGrid with height and appending to body  
// giving grid an alignment of top
const grid = new SuperGrid({ height: '200px' })
grid.appendTo(document.body)
grid.alignment('top')

// redBox created in div 
const redBox = new SuperBox('div')
console.dir(redBox.element.style)

redBox.color('red')
// append redbox to grid element and give size
redBox.appendTo(grid.element);
redBox.size('100px', '100px');

//box created in div (yellow)
// append to grid element
const yellowBox = new SuperBox('div', 'yellow', '100px', '100px')
yellowBox.appendTo(grid.element);

//extra box for exercise(BLUE)
const blueBox = new SuperBox('div')
console.dir(blueBox.element.style)

blueBox.color('blue')

blueBox.appendTo(grid.element);
blueBox.size('100px', '100px');



