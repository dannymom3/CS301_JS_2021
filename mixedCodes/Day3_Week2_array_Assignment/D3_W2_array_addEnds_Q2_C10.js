"use strict";

//Write a function that return the sum of the first and last value in an array.
function addEnds(list) {
    let sum = list[0] + list[list.length - 1];
    return sum;
}

console.log(addEnds(list));