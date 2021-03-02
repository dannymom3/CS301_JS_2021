'use strict';
//Write a program to replace all the occurrence of "for" in an input string with 4.

let str = "Thanks for joining us.";
/*Can use replace() method
 str = str.replace("for", "4");
 */
let arr = str.split(" ");
for(let i=0; i<arr.length; i++){
    if(arr[i] === "for"){
        arr[i] = "4";
    }
}

str = arr.join(" ");

console.log(str)


"use-strict";

//Call the reverse function and use in suffix function.
function suffix(str1, str2) {
    let reversed_1 = reverse(str1);
    let reversed_2 = reverse(str2);
    let length = Math.min(reversed_1.length, reversed_2.length);

    let common_suffix = "";
    for (let i = 0; i < length; i++) {
        if (reversed_1[i] !== reversed_2[i]) {
            break;
        } else {
            common_suffix += reversed_1[i]
        }
    }
    common_suffix = reverse(common_suffix);
    return common_suffix;
}
console.log(suffix(str1, str2))

//Reverse the given string
function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}


