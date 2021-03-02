"use strict";

//Write a function that count and return the number of even integers in an array.
function countEvens(list) {
    let count = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEvens(list))