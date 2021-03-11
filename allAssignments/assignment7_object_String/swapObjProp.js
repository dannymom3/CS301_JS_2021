"use strict";

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {Object} ob1 user inputobject
 * @param {Object} ob2 user input object
 * @param {Properties} prop object properties
 * @return {Properties} returns swap object properties
 */
function swapProps(ob1, ob2, prop) { //objects by themselves do not swaps, instead the properties
    //do swap
    let temp = ob1[prop];
    ob1[prop] = ob2[prop];
    ob2[prop] = temp;
}

let ob1 = { name: "Danny", age: 28 };
let ob2 = { name: "Haile", age: 50 };
console.log("------- swap age--------");
console.log(ob1, ob2);
swapProps(ob1, ob2, "age");
console.log(ob1, ob2);

console.log("------- swap name--------");
console.log(ob1, ob2);
swapProps(ob1, ob2, "name");
console.log(ob1, ob2);