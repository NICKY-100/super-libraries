//import SuperBox and SuperGrid from respective js files.
import { superConstructors } from './library/main';
import $e from './library/main.js'
const { SuperBox, SuperButton, SuperForm, SuperGrid, SuperSelect } = superConstructors
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
const select = new SuperSelect('box-alignment',
    [
        ["bottomRight", "bottom right"],
        ["bottomLeft", "bottom left"],
        ["bottomCenter", "bottom center"],
        ["stretch", "stretch"],
        ["left", "left"],
        ["right", "right"],
        ["center", "center"],
        ["topRight", "top right"],
        ["topLeft", "top left"],
        ["topCenter", "top center"],
        ["spaceBetween", "space between"],
        ["spaceEvenly", "space evenly"],
        ["spaceAround", "space around"]

    ]
)

// submit button to create new button
// create a new superForm and appending to form
const submit = new SuperButton('submit', 'submit')
const form = new SuperForm()
select.appendTo(form.element)
submit.appendTo(form.element)
form.appendTo(document.body)
form.submit(() => {
    const alignment = form.getVal('box-alignment')
    grid.alignment(alignment)
})

const smallBox = $e('SuperBox', { tag: "div", backgroundColor: "blue", height: "100px", width: "100px" })
//main.js


$e('superElement', { height: '100px', width: '100px' })
$e('superGrid', { alignment: "center" })

