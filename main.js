//import SuperBox and SuperGrid from respective js files.
import SuperBox from './SuperBox.js';
import SuperGrid from './SuperGrid.js';
import SuperForm from './SuperForm.js';
import SuperButton from './SuperButton.js';
import SuperSelect from './SuperSelect.js';

// new SuperGrid with height and appending to body  
// giving grid an alignment of top
const grid = new SuperGrid({ height: '100vh' })
grid.appendTo(document.body)
grid.alignment('bottomRight')

// redBox created in div 
const redBox = new SuperBox('div')
console.dir(redBox.element.style)

redBox.backgroundColor('red')
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

blueBox.backgroundColor('blue')

blueBox.appendTo(grid.element);
blueBox.size('100px', '100px');

// create a new superselect 
const select = new SuperSelect()



// submit button to create new button
// create a new superForm and appending to form
const submit = new SuperButton('submit', 'submit')
const form = new SuperForm()
select.appendTo(form.element)
submit.appendTo(form.element)
form.appendTo(document.body)
form.submit(() => {
    console.log("hello")
})

