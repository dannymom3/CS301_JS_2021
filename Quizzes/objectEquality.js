"use strict";

let sam1 = { name: "Sam", age: 10 };
let sam2 = { name: "Sam", age: 10 };
let John = { name: "John", age: 10 };


console.log(sam1 === sam2); //JS makes it false
console.log(sam1 === John); //JS makes it false
console.log(isPersonEqual(sam1, sam2)); // I make it true, if two people have the same name they are equal "bemilew lol"
console.log(isPersonEqual(sam1, John));

/**
 * 
 * @param {Object} ob1 first object
 * @param {Object} ob2 second object
 * @return {boolean} returns true or false
 */
function isPersonEqual(ob1, ob2) {
    if (ob1.name === ob2.name && ob1.age === ob2.age) {
        return true;
    } else {
        return false;
    }
}