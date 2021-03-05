"use strict";

/*
Write a function, isArrayEqual, that returns true if two arrays have === elements, 
else returns false.
*/

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

let arr3 = [4, 5, 6, 7, 8, 9];
let arr4 = arr3;
/**
 * 
 * @param {array} firstArr the first array to be compared
 * @param {array} secondArr the second array to be compared
 * @return {boolean} returns true if they're equal otherwise returns false
 */
function isArrayEqual(firstArr, secondArr) {
    if (firstArr !== secondArr) {
        return false;
    }
    for (let i = 0; i < firstArr.length; i++) { //either firstArr or secondArr for using 
        //for loop
        if (firstArr[i] !== secondArr[i]) {
            return false;
        }
    }
    return true;
}
let answer = isArrayEqual(arr1, arr2);
console.log(answer);


let answer2 = isArrayEqual(arr3, arr4);
console.log(answer2);

//console.log(typeof arr1); //object