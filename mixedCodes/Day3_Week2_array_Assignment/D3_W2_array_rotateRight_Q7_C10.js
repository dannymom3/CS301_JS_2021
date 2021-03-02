"use strict";

//Write a function to rotate the element in an array to the right.
function rotateRight(list) {
    for (let i = list.length - 1; i - 1 >= 0; i--) {
        let swap = list[i];
        list[i] = list[i - 1];
        list[i - 1] = swap
    }
    return list;
}

console.log(rotateRight(list))