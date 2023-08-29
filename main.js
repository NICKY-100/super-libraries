
import SuperBox from './SuperBox.js';
import SuperGrid from './SuperGrid.js';

const grid = new SuperGrid({ height: '200px' })
grid.appendTo(document.body)
grid.alignment('top')


// first box created in div red
const redBox = new SuperBox('div')
console.dir(redBox.element.style)

redBox.color('red')
// append redbox to grid element
redBox.appendTo(grid.element);
redBox.size('100px', '100px');

//box created in div yellow
const yellowBox = new SuperBox('div', 'yellow', '100px', '100px')
yellowBox.appendTo(grid.element);

//extra box for exercise(BLUE)
const blueBox = new SuperBox('div')
console.dir(blueBox.element.style)

blueBox.color('blue')

blueBox.appendTo(grid.element);
blueBox.size('100px', '100px');



