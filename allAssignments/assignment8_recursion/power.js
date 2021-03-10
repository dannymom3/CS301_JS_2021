"use strict";

/*
calculate the power of any base
*/

/**
 * 
 * @param {number} base the base of the exponent 
 * @param {number} expo exponent of the base power
 * @return {number} returns base to the exponent
 */
function pow(base, expo) {
    if (expo === 0) {
        return 1;
    } else if (expo === 1) {
        return base;
    } else {
        return base * pow(base, expo - 1);
    }
}

let myNum = 2;
console.log(pow(3, myNum));