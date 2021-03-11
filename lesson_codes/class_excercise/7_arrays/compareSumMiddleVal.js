"use strict";
/*
Write a function that takes an array of numbers as an input and 
test whether the sum of first and last values in the array is equal to the middle value. 
If the array size is even middle value is the rounded average of two middle values. 
Return true if the test is successful, otherwise return false.
 */
function compareValue(arr) {
    let l = arr.length;
    let sum = arr[0] + arr[l - 1];

    let middleVal;
    if (l % 2 === 0) {
        middleVal = (arr[l / 2 - 1] + arr[l / 2]) / 2;
        middleVal = Math.round(middleVal);
    } else {
        middleVal = arr[(l - 1) / 2]
    }

    return (sum === middleVal);
}

let value = [4, 2, 9, 4, 5];
console.log(compareValue(value));

let value1 = [4, 2, 9, 4, 8];
console.log(compareValue(value1));