"use strict";

/*
Write a JavaScript program that number input from the user at once as comma 
separated values and stores it into an arrayand do following operations
a.Filters out negative values
b.Maps the filtered elements to sum of its digits(optional)
c.Reduce to get sum of all the elements (optional)
*/

/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {array} arr array of inputed by the user
 * @return {array} returns negative elements in the array 
 */
function filterNegative(arr) {
    let negativeArray = [];
    let myK = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeArray[myK] = arr[i];
            myK++;
        }
    }
    return negativeArray;
}
let userArray = [1, -2, 3, -4, 5, -6];
let result = filterNegative(userArray);
console.log(result);

module.exports = { filterNegative };