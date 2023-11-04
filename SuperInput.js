import SuperEvent from "./SuperEvent.js"
/**
 * inputs for elements 
 * @constructor
 * @extends SuperEvent
 * @param {string} type -
 * @param {string} name -
 * @param {string} attributes -
 * @example
 * const myInput = new SuperInput("text", "first-name", [["class", "input-large"]])
 * <input tupe = "text" name ="first-name" class="input-large"
  */
// this function is incomplete
function SuperInput({ type, name, attributes = [] }) {
  SuperElement.call(this, 'input')

  this.element.type = type
  this.element.name = name

  //add html  attributes to element 
  for (let i = 0; i < attributes.length; i++) {
    const [name, value] = setAttributes[i]

    this.element.setAttributes(name, value)
    input.appendTo(this.element)

  }
}
//const textInput = new SuperInput('text', "todo-item")
//const button = new SuperInput('button', "submit" , [
// [ " value"  "submit"]
// ])
// const todoForm
SuperInput.prototype = Object.create(SuperEvent.prototype)


export default SuperEvent;

