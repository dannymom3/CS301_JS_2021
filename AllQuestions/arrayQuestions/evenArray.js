"use strict";
/**
 * 
 * @param {Array} arr user input Array
 * @return {Array} returns even array elements
 */
function isEven(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];

let answer = isEven(myArr);
console.log(answer);