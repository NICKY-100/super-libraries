import SuperEvent from "./SuperEvent.js"
/**
 * inputs for elements 
 * @constructor
 * @extends SuperEvent
 * @param {string}  - 
 * @example
 * const myInput = new SuperInput("")
  */
// this function is incomplete
function SuperInput(type, name, attributes = [['long', 'knife ', 'box1'], ['short', 'blade', 'box2']]) {

  SuperElement.call(this, 'input')
  this.element.type = type
  this.element.name = name
  this.element.setAttribute = attributes
  for (let i = 0; i < attributes.length; i++) {

    const input = new SuperInput(attributes[i][0], attributes[i][1])
    input.appendTo(this.element)
    //const textInput = new SuperInput('text', "todo-item")
    //const button = new SuperInput('button', "submit" , [
    // [ " value"  "submit"]
    // ])
    // const todoForm
  }
}

SuperInput.prototype = Object.create(SuperEvent.prototype)


export default SuperEvent;

