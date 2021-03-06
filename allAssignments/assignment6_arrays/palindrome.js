"use strict";

/*
Write a function that takes an array of strings and returns array of palindrome strings only.
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {array} arr user input array
 * @return {boolean} returns true if an array is a palindrome, otherwise returns false 
 */
function isPalindrome(arr) {
    let len = arr.length - 1;
    if (arr.length % 2 === 0) {
        return false;
    }
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - i - 1]) {
            return false;
        }
    }
    return true;
}

let userArray = [1, 2, 3, 2, 1]; //odd elements
let answer = isPalindrome(userArray);
console.log(answer);

let userArray2 = [1, 2, 2, 1]; //Even elements
let answer2 = isPalindrome(userArray2);
console.log(answer2);

module.exports = { isPalindrome };