import SuperEvent from "./SuperEvent.js"
/**
 * inputs for elements 
 * @constructor
 * @extends SuperEvent
 * @param {string}  - 
 * @example
 * const myInput = new SuperInput("")
  */

function SuperInput() {

}
SuperInput.prototype = Object.create(SuperEvent.prototype)


export default SuperEvent;

// {/* < input type = "text" id = "name" name = "name" required minlength = "4"
//     /> */}