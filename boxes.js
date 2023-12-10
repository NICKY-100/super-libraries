import $e from './library/main.js'
// import SuperBox and SuperGrid from respective js files.
// new SuperGrid with height and appending to body
// giving grid an alignment of top
const grid = $e('SuperGrid', { height: '100vh' })// superGrid
grid.appendTo(document.body)
grid.alignment('bottomRight')

// redBox created in div
const redBox = $e('SuperBox', { tag: 'div' })// 'div' SuperBox
console.dir(redBox.element.style)

redBox.backgroundColor('red')
// append redbox to grid element and give size
redBox.appendTo(grid.element)
redBox.size('100px', '100px')

// box created in div (yellow)
// append to grid element
const yellowBox = $e('SuperBox', { tag: 'div', backgroundColor: 'yellow', width: '100px', height: '100px' })
yellowBox.appendTo(grid.element)

// extra box for exercise(BLUE)
const blueBox = $e('SuperBox', { tag: 'div' })// superBox "div"
console.dir(blueBox.element.style)

blueBox.backgroundColor('blue')

blueBox.appendTo(grid.element)
blueBox.size('100px', '100px')

// create a new superselect
const select = $e('SuperSelect', {
  name: 'mySelect',
  options: [
    ['bottomRight', 'bottom right'],
    ['bottomLeft', 'bottom left'],
    ['bottomCenter', 'bottom center'],
    ['stretch', 'stretch'],
    ['left', 'left'],
    ['right', 'right'],
    ['center', 'center'],
    ['topRight', 'top right'],
    ['topLeft', 'top left'],
    ['topCenter', 'top center'],
    ['spaceBetween', 'space between'],
    ['spaceEvenly', 'space evenly'],
    ['spaceAround', 'space around']
  ]
}
)

// submit button to create new button
// create a new superForm and appending to form
const submit = $e('SuperButton', { type: 'submit', text: 'submit' }) // SuperButton
const form = $e('SuperForm')// SuperForm
select.appendTo(form.element)
submit.appendTo(form.element)
form.appendTo(document.body)
form.submit(() => {
  const alignment = form.getVal('mySelect')
  grid.alignment(alignment)
})
