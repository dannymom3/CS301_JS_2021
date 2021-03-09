"use strict";

/**
 * 
 * @param {Array} arr is user input array
 * @return {boolean} returns true if the array is palindrome, otherwise retuurns false
 */
function isPalindrom(arr) {
    let myCopy = [];

    for (let num of arr) {
        myCopy.push(num);
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr.shift() !== arr.pop()) { //shift() take elements from the beggining as the same time 
            //pop() takes the element from the end of the given array
            return false;
        }
    }
    return true;
}

let newArr = [1, 2, 3, 2, 1];
let answer1 = isPalindrom(newArr);
console.log(answer1);

let newArr2 = [1, 2, 2, 1, 2];
let answer2 = isPalindrom(newArr2);
console.log(answer2);