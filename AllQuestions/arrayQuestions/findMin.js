"use strict";
/*
Writea function findMin that takes an array as a parameter and returns
 the minimum value. Now use this function to find minimum 
 value in the array [2,3, -1,-4,3,2,1]
 */
/**
 * 
 * @param {array} arr inputed array
 * @return {number} returns the minimum number 
 */
function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let myArr = [1, 2, 3, -4];
let answer = findMin(myArr);
console.log(answer);