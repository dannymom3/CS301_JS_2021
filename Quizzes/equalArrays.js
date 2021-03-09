"use strict";

/*
Twoarrays are considered equal if they have exact same elements, even if order
 may differ. Write a functionthat tests weather two arrays are equal.
 e.g. [1,2,3] isequal to [1,2,3] and[3,1,2] but notequal to [1,2] or [2,1,3,4]
 */
//NB: NEED TODO

/**
 * 
 * @param {Array} arr1 inpute array from the user 
 * @param {Array} arr2 second input array from the user
 * @return {boolean} returns true if the arrays are equal, otherwise return false
 */
function equalArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = i; j < arr1.length; j++) {
            if (arr1[i] !== arr2[j])
                return false;
            break;
        }
    }
    return true;
}

let myArr = [1, 2, 3];
let myArr1 = [1, 2, 3, 4];

let answer = equalArrays(myArr, myArr1);
console.log(answer);