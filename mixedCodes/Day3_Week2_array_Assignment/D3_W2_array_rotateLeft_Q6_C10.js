"use strict";

//Write a function to rotate the element in an array to the left.
function rotateLeft(list) {
    for (let i = 0; i + 1 < list.length; i++) {
        let swap = list[i];
        list[i] = list[i + 1];
        list[i + 1] = swap
    }
    return list;
}

console.log(rotateLeft(list))