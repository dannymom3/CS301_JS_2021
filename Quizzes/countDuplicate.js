"use strict";
/*
Write a functionto count total number of duplicate elements in an array.
*/


function countDuplicateElements(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j])
                count++;
        }
    }
    return count;
}

let arr2 = [1, 2, 3, 4, 5, 6, 6, 9, 8, 8, 8];
arr2.sort();
let answer = countDuplicateElements(arr2);
console.log(answer);