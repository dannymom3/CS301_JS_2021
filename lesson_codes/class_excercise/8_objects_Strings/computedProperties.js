"use strict";
// const prompt = require("prompt-sync")();
// let fruit = prompt("which fruit to buy?", "apple");


// let bag = {

//     [fruit]: 5,

// };

// console.log(bag.apple);

// let message = "Hello!";
// let phrase = message; // second copy of "Hello!"; 
// message = "Hi!";
// console.log(phrase); // Hello!
// console.log(message);

function changeVal(msg) {
    msg = 'changed';
}
let msg = 'orginal';
changeVal(msg);
console.log(msg);