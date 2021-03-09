"use strict";
/*Write a function named titleCase with one parameter named str. 
This function returns a copy of s but with the first letter of each word capitalized.
--------------------------------------------------------------------------------------
*/
/**
 * @author Daniel Haile
 * @param {String} str user input String
 * @return {String} returns first letter upperCase String
 */
function titleCase1(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return arr.join(" ");
}
//E.g. expected output is //DANIEL
console.log(titleCase1("dANIEL"));