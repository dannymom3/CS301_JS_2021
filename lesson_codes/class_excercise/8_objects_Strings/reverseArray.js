"use strict";
/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {string} str is a word or a phrase
 * @return {string} a reversed word or a reversed phrase
 */
function reverse(str) {
    let arr = str.split("");
    let j = 0;
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr[j] = arr[i];
        j++;
    }
    return reverseArr.join("");
}
let myArr = ["daniel"];
let answer = reverse(myArr);
console.log(answer);