"use strict";
/*
Write a function addend(arr)that accepts an array of numbers as parameters and
 returns the sum of firs and last elements of the array.

*/

let myArray = [100, 2, 3, 5, 100];
/**
 * 
 * @param {array} arr array elements from the user
 * @return {arrays} returns the sum of first and last elements of the array 
 */
function addends(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = arr[0] + arr[arr.length - 1];

    }
    return newArr;

}
let answer = addends(myArray);
console.log(answer);

module.exports = { addends };