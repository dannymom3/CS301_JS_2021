"use strict";


/**
 * 
 * @param {Array} arr user input Array
 * @return {number} returns the middle element of the array
 */
function getMiddle(arr) {
    let length = arr.length;

    //for (let i = 0; i < length; i++) {
    if (length % 2 === 0) {
        let midIndex = length / 2;
        let myVal = (arr[midIndex - 1] + arr[length / 2]) / 2;
        return myVal;
    }
    // }
    return arr[(length - 1) / 2];
}

let myArr = [1, 2, 3, 4, 5]; // expected 3, cuz odd length
let answer = getMiddle(myArr);
console.log(answer);


let myArr2 = [1, 2, 3, 4]; // expected (2 + 3) / 2 => 2.5 cuz even length
let answer2 = getMiddle(myArr2);
console.log(answer2);