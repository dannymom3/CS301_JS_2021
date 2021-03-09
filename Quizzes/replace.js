"use strict";
//Write a program to replace all the occurrence of "for" in an input string with 4.

let str = "Thanks for joining us.";
/*Can use replace() method
 str = str.replace("for", "4");
 */
let arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "for") {
        arr[i] = "4";
    }
}

str = arr.join(" ");

console.log(str);