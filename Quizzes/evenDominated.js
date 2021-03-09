"use strict";
/*
An evenDominated array is an array that has count of even elements in the array more than the odd elements. 
Write a function that tests if an array is evendominated.
----------------------------------------------------------------------------------------------------------
*
 
/**
 * 
 * @param {Array} arr an array inputed by the user
 * @return {number} returns a number counts the dominated even elements 
 */
function evenDominanted(arr) {

    //TODO
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 > arr[i] % 2 !== 0) {
            console.log("Even count is dominated")
        } else {
            console.log("Odd count is dominated")
        }
    }

}
//TODO

let arr2 = [1, 2, 3, 4, 5, 6, 8, 10, 20];

evenDominanted(arr2);