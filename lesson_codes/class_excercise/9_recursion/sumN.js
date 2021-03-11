"use strict";
/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {number} num user input number
 * @return {number} returns the sum of all numbers from the base case to the user 
 * input number
 */
function sumN(num) {
    //base cases
    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        //recursive cases
        return num + sumN(num - 1);
    }

}

let myNum = 10;
console.log(sumN(myNum));