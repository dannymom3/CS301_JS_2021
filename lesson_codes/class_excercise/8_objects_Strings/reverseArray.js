"use strict";
/**
 * @since Feb / 2021
 * @author Daniel Haile
 * @param {string} str is a word or a phrase
 * @return {string} a reversed word or a reversed phrase
 */
function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
let myArr = "daniel";
let answer = reverse(myArr);
console.log(answer);