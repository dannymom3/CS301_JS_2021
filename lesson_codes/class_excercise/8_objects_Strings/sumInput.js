"use strict";
const prompt = require("prompt-sync")();

function sumInput() {
    let arr = [];
    let value = 0;
    value = prompt("enter a value");
    while (value && !isNaN(value)) {
        arr.push(value);
        value = prompt("enter a value");
    }
    value = 0;
    for (let i in arr) {
        value += arr[i];
    }
    return value;
}
let newArr = [1, 2, 3, 4, 5];

console.log(sumInput(newArr));