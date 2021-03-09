"use strict";
/*
Write a functionto count total number of duplicate elements in an array.
*/

/**
 * 
 * @param {Array} arr user input Array
 * @return {number} returns number of duplicate elements
 */
function countDuplicate(arr) {
    let duplicateCount = 0;
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) { //arr.length - 1 ==> prevents to out range the array
        if (arr[i] === arr[i + 1]) {
            duplicateCount++;
        }
    }
    return duplicateCount;
}

let arr2 = [1, 2, 3, 4, 5, 6, 6, 9, 8, 8, 8];
arr2.sort();
let answer = countDuplicate(arr2);
console.log(answer);