"use strict";
/**
 * 
 * @param {number} num number to be tested even or not
 * @return {number} returns even numbers 
 */
function isEven(num) {
    return num % 2 === 0;
}
/**
 * 
 * @param {number} num number to be tested even or not
 * @return {number} returns even numbers 
 */
function printEven(num) {
    for (let i = 0; i <= num; i++) {
        if (isEven(i))
            console.log(i);

    }
}

let myNum = 7;
printEven(myNum);