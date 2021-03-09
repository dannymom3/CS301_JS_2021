"use strict";
/*
An evenDominated array is an array that has count of even elements in the array more than the odd elements. 
Write a function that tests if an array is evendominated.
----------------------------------------------------------------------------------------------------------
*/

/**
 * 
 * @param {Array} arr an array inputed by the user
 * @return {boolean} returns true if even dominated otherwise return false
 * if odd is more than even elements of the array
 */
function isEvenDominanted(arr) {

    let evenCount = 0;
    let oddCount = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return evenCount > oddCount;

}


// let arr2 = [1, 3, 3, 3, 3, 3, 3];

// let answer = isEvenDominanted(arr2);
// console.log(answer);

let result = isEvenDominanted([-1, 2, 3, 3, 4, 4, 4, 4, 4]);
if (result) console.log("It's even dominated");